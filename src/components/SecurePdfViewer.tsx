import { useState, useMemo, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';
import { ZoomIn, ZoomOut, X, Maximize, Minimize } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Configure the worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface SecurePdfViewerProps {
    file: string;
    title: string;
    onClose: () => void;
}

export default function SecurePdfViewer({ file, title, onClose }: SecurePdfViewerProps) {
    const { t } = useLang();
    const [numPages, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [scale, setScale] = useState<number>(1.0);
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
    const [loading, setLoading] = useState(true);

    // Prevent body scrolling while the viewer is open
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = originalStyle;
        };
    }, []);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
        setLoading(false);
    }

    const zoomIn = () => setScale(prev => Math.min(prev + 0.2, 3.0));
    const zoomOut = () => setScale(prev => Math.max(prev - 0.2, 0.5));

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
            setIsFullscreen(true);
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                setIsFullscreen(false);
            }
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex flex-col bg-background/95 backdrop-blur-md pb-10"
                onContextMenu={(e) => e.preventDefault()} // Prevent right-click everywhere in viewer
                style={{ userSelect: 'none' }} // Prevent text selection
            >
                {/* Top Control Bar */}
                <div className="flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur-md border-b border-white/10 shadow-sm z-10">
                    <div className="flex items-center gap-4">
                        <button
                            onClick={onClose}
                            className="p-2 rounded-full hover:bg-white/20 transition-colors text-foreground"
                            aria-label="Close"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <h2 className="font-heading font-bold text-lg text-foreground truncate max-w-sm sm:max-w-md">
                            {title}
                        </h2>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-4">
                        {/* Zoom Controls */}
                        <div className="hidden sm:flex items-center gap-1 bg-white/5 rounded-lg p-1 border border-white/10">
                            <button
                                disabled={scale <= 0.5}
                                onClick={zoomOut}
                                className="p-2 rounded hover:bg-white/20 disabled:opacity-50 text-foreground transition-colors"
                            >
                                <ZoomOut className="w-4 h-4" />
                            </button>
                            <span className="text-xs font-semibold px-2 w-12 text-center text-foreground">
                                {Math.round(scale * 100)}%
                            </span>
                            <button
                                disabled={scale >= 3.0}
                                onClick={zoomIn}
                                className="p-2 rounded hover:bg-white/20 disabled:opacity-50 text-foreground transition-colors"
                            >
                                <ZoomIn className="w-4 h-4" />
                            </button>
                        </div>

                        <button
                            onClick={toggleFullscreen}
                            className="p-2 rounded-lg hover:bg-white/20 transition-colors text-foreground hidden sm:block"
                        >
                            {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
                        </button>
                    </div>
                </div>

                {/* PDF Document Area */}
                <div className="flex-1 overflow-y-auto overflow-x-auto py-8 px-4 bg-muted/30">
                    <div className="flex flex-col items-center">
                        <Document
                            file={file}
                            onLoadSuccess={onDocumentLoadSuccess}
                            loading={
                                <div className="flex flex-col items-center justify-center p-20 gap-4 text-muted-foreground">
                                    <div className="w-10 h-10 border-4 border-biex-blue/30 border-t-biex-blue rounded-full animate-spin" />
                                    <p>{t("Chargement du document...", "Loading document...", "Dokument wird geladen...", "جاري تحميل المستند...")}</p>
                                </div>
                            }
                            error={
                                <div className="p-10 text-destructive text-center font-semibold bg-destructive/10 rounded-lg">
                                    {t(
                                        "Impossible de charger le document.",
                                        "Failed to load the document.",
                                        "Das Dokument konnte nicht geladen werden.",
                                        "تعذر تحميل المستند."
                                    )}
                                </div>
                            }
                        >
                            {Array.from({ length: numPages }, (_, index) => (
                                <div key={`page_${index + 1}`} className="mb-6 shadow-xl relative bg-white rounded-lg overflow-hidden">
                                    <Page
                                        pageNumber={index + 1}
                                        scale={scale}
                                        renderTextLayer={false}
                                        renderAnnotationLayer={false}
                                        className="max-w-full"
                                        loading={<div className="h-[800px] w-[600px] bg-black/5 animate-pulse flex items-center justify-center text-muted-foreground">{t("Chargement de la page...", "Loading page...", "Seite wird geladen...", "جاري تحميل الصفحة...")}</div>}
                                    />
                                    {/* Transparent overlay to block interaction with canvas content */}
                                    <div className="absolute inset-0 z-10" onDragStart={(e) => e.preventDefault()} />
                                    {/* Page Number Indicator */}
                                    <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm z-20 pointer-events-none">
                                        {index + 1} / {numPages}
                                    </div>
                                </div>
                            ))}
                        </Document>
                    </div>
                </div>

                {/* Mobile Zoom Controls (Overlay) */}
                <div className="sm:hidden fixed bottom-24 right-6 flex flex-col gap-2 z-20">
                    <button
                        disabled={scale >= 3.0}
                        onClick={zoomIn}
                        className="p-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-full shadow-lg border border-border disabled:opacity-50"
                    >
                        <ZoomIn className="w-5 h-5 text-foreground" />
                    </button>
                    <button
                        disabled={scale <= 0.5}
                        onClick={zoomOut}
                        className="p-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-full shadow-lg border border-border disabled:opacity-50"
                    >
                        <ZoomOut className="w-5 h-5 text-foreground" />
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
