
interface HeaderProps {
    user: any
}
export default function Header({user}: HeaderProps) {
    return (
        <header className=" border-slate-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-2 py-4">
          <div className="flex items-center gap-2 bg-linear-to-t from-orange-500 to-orange-400 rounded-2xl">
            <div className="flex flex-col">
              <span className="text-sm p-4 font-semibold text-white">
                Tableau de bord apprenante
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3 text-right sm:bg-white rounded-2xl  p-3 px-4 border-dashed sm:border border-slate-200 ">
            <div className="hidden text-xs text-slate-500 sm:block">
              <p className="font-medium text-slate-700">
                Bonjour,
              </p>
              <p className="truncate text-[11px] text-slate-500">
                {user.email}
              </p>
            </div>
            <div className="flex h-13 w-13 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-orange-100 text-xs font-semibold text-orange-700">
              {user.email?.[0]?.toUpperCase() ?? 'A'}
            </div>
          </div>
        </div>
      </header>
    )
}