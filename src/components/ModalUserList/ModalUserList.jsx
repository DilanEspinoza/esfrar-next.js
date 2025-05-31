export default function ModalUserList({ isOpen, title, users }) {
    if (!isOpen) return null;

    const closeModal = () => {
        const event = new CustomEvent("closeModalUserList");
        window.dispatchEvent(event);
    };

    const handleClickOutside = () => {
        closeModal();
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <div onClick={handleClickOutside} className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000b9] bg-opacity-10">
            <div onClick={stopPropagation} className="bg-white w-full max-w-md h-[400px] rounded-lg overflow-hidden shadow-lg relative flex flex-col">
                <div className="p-4 border-b border-neutral-200 text-center text-lg font-semibold relative">
                    {title}
                    <button
                        onClick={closeModal}
                        className="absolute right-4 top-1/2 -translate-y-1/2  hover:text-black text-xl"
                    >
                        &times;
                    </button>
                </div>

                <div className="overflow-y-auto flex-1">
                    {users.length === 0 ? (
                        <p className="p-4 text-center">No hay usuarios.</p>
                    ) : (
                        <ul>
                            {users.map((user) => (
                                <li key={user.id} className="flex items-center gap-4 p-4  ">
                                    <img src={user.avatar || '/default-avatar.png'} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                                    <span className="font-medium">{user.name}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
