const navigation = {
    about: [
        { name: "Sobre nosotros", href: "about" },
        { name: "Equipo", href: "/about#team" },
        { name: "Bolg", href: "" },

    ],
    support: [
        { name: "FQA", href: "fqa" },
        // { name: "Contribute", href: "contributing" },
        { name: "Contactanos", href: "contact" },
    ],

    legal: [
        { name: "Términos", href: "terms" },
        // { name: "Privacy", href: "terms/privacy" },
    ],
    social: [
        {
            name: "Facebook",
            href: "#",
            icon: (props) => (
                <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
                    <path
                        fillRule='evenodd'
                        d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                        clipRule='evenodd'
                    />
                </svg>
            ),
        },
        {
            name: "Instagram",
            href: "#",
            icon: (props) => (
                <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
                    <path
                        fillRule='evenodd'
                        d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                        clipRule='evenodd'
                    />
                </svg>
            ),
        },
        {
            name: "GitHub",
            href: "#",
            icon: (props) => (
                <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
                    <path
                        fillRule='evenodd'
                        d='M12 2C6.477 2 2 6.484 2 12.019c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.01-1.03-.015-1.868-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.607.069-.607 1.002.07 1.53 1.028 1.53 1.028.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.637-1.339-2.22-.253-4.555-1.11-4.555-4.944 0-1.092.39-1.986 1.03-2.685-.103-.254-.447-1.274.098-2.656 0 0 .84-.27 2.75 1.026a9.562 9.562 0 012.5-.336c.849.004 1.705.115 2.5.336 1.91-1.296 2.75-1.026 2.75-1.026.546 1.382.202 2.402.1 2.656.641.699 1.03 1.593 1.03 2.685 0 3.841-2.338 4.687-4.565 4.936.36.31.682.923.682 1.861 0 1.344-.012 2.427-.012 2.756 0 .268.18.58.688.481C19.14 20.178 22 16.43 22 12.019 22 6.484 17.523 2 12 2z'
                        clipRule='evenodd'
                    />
                </svg>
            ),
        },
    ],
};

export const Footer = () => {
    return (
        <>
            <hr className='border-[1px] border-gray-200 w-full' />
            <footer
                className='bg-white flex justify-center items-center mx-auto w-11/12 '
                aria-labelledby='footer-heading'>
                <h2 id='footer-heading' className='sr-only'>
                    Footer
                </h2>
                <div className='mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8'>
                    <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
                        <div className='space-y-8 xl:col-span-1'>
                            <a href='/'>
                                {/*   <img
                                    className='h-8'
                                    src=''
                                    alt='Pumas Learn'
                                /> */}
                            </a>
                            <p className='text-base text-gray-500'>
                                Making the world a better place through constructing elegant
                                hierarchies.
                            </p>
                            <div className='flex space-x-6'>
                                {navigation?.social?.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className='text-gray-400 hover:text-gray-500'>
                                        <span className='sr-only'>{item.name}</span>
                                        <item.icon className='h-6 w-6' aria-hidden='true' />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className='mt-12 grid grid-cols-2  xl:col-span-2 xl:mt-0'>
                            <div className='md:grid md:grid-cols-2 md:gap-8'>
                                <div>
                                    <h3 className='text-base font-medium text-gray-900'>About</h3>
                                    <ul role='list' className='mt-4 space-y-4'>
                                        {navigation?.about?.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className='text-base text-gray-500 hover:text-gray-900'>
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='mt-12 md:mt-0'>
                                    <h3 className='text-base font-medium text-gray-900'>
                                        Support
                                    </h3>
                                    <ul role='list' className='mt-4 space-y-4'>
                                        {navigation?.support?.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className='text-base text-gray-500 hover:text-gray-900'>
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className='md:grid md:grid-cols-2 md:gap-8'>

                                <div className='mt-12 md:mt-0'>
                                    <h3 className='text-base font-medium text-gray-900'>Legal</h3>
                                    <ul role='list' className='mt-4 space-y-4'>
                                        {navigation?.legal?.map((item) => (
                                            <li key={item.name}>
                                                <a
                                                    href={item.href}
                                                    className='text-base text-gray-500 hover:text-gray-900'>
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-12 border-t border-gray-200 pt-8'>
                        <p className='text-base text-gray-400 xl:text-center'>
                            &copy; 2025 Esfrar, Inc. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};