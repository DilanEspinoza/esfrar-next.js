export default function SplashScreen({ isVisible }) {
    return (
        <div
            className={`
        fixed inset-0 z-50 bg-white flex items-center justify-center
        transition-opacity duration-700
        ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
        >
            <div className="text-center">
                <h1 className="text-4xl font-bold text-blue-600 mb-4">Institucion Educativa Pomasqui</h1>
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            </div>
        </div>
    );
}
