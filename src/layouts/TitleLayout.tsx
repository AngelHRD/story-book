export const TitleLayout = ({ title }: { title: string }) => (
    <div className="flex items-center p-8 border-b border-gray-200 mb-8">
        <h1 className="text-4xl font-semibold -tracking-wide text-slate-700">{title}</h1>
    </div>
);
