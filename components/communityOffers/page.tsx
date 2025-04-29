export const CommunityOffers  = () =>{
    return(
        <div className="container mx-auto px-4">
            <div className="flex flex-col items-center mb-5">
             <h2 className="text-3xl md:text-4xl font-bold text-center">Deseja receber ofertas <span className="text-[#ff2085]">exclusivas</span> ?</h2>
             <p className="text-gray-600 max-w-2xl mt-2 mx-auto">
                Receba descontos exclusivos, lançamentos e conteúdos personalizados.
             </p>
            </div>
            <div className="flex items-center justify-center">
                <div className=" max-w-2xl mx-auto rounded-xl mb-5 pt-0 p-6  transition-all duration-300 transform hover:-translate-y-1 group">
                    <div className="text-center">
                        <a
                        href="https://chat.whatsapp.com/EDZVG79QSn5Dtl8KE2iq54"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-[#1ebe5d] transition duration-300"
                        >
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M20.52 3.48A11.74 11.74 0 0012 0a11.74 11.74 0 00-8.52 3.48A11.74 11.74 0 000 12c0 2.11.55 4.15 1.6 5.97L0 24l6.17-1.61A11.7 11.7 0 0012 24c3.14 0 6.09-1.22 8.52-3.48A11.74 11.74 0 0024 12a11.74 11.74 0 00-3.48-8.52zM12 22c-2.18 0-4.29-.63-6.1-1.81l-.44-.26-3.66.95.97-3.57-.28-.46A9.77 9.77 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.12-7.25c-.28-.14-1.65-.82-1.9-.91-.25-.09-.43-.14-.61.14s-.7.91-.85 1.1c-.16.18-.31.2-.59.07s-1.15-.42-2.19-1.34c-.81-.72-1.35-1.61-1.51-1.88s-.02-.42.12-.56c.12-.12.28-.31.42-.47.14-.16.18-.28.28-.47.09-.18.04-.35-.02-.49-.07-.14-.61-1.47-.83-2.02s-.44-.47-.61-.48c-.16-.01-.35-.01-.54-.01-.18 0-.47.07-.72.35s-.94.92-.94 2.25.97 2.61 1.1 2.79c.14.18 1.9 2.91 4.6 4.08.64.28 1.14.45 1.53.57.64.2 1.22.17 1.68.1.51-.08 1.65-.67 1.89-1.31.23-.64.23-1.2.16-1.31-.07-.12-.25-.18-.53-.32z" />
                        </svg>
                        Acesse a Comunidade no WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}