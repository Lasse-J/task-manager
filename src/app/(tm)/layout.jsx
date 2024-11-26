export const metadata = {
  title: "Task Manager",
  description: "Task manager app by Lasse Juusela",
};

export default function TMLayout({ children }) {
  return (
    <div className="mx-auto w-full animate-appear">
      <div>
        {children}
      </div>
    </div>
  );
}

