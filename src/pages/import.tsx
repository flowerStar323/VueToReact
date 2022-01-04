import "./import.style.css";
import AuthSvg from "../assets/img/auth.svg";
import { useState } from "react";
const Import = () => {
    const [langFlag, setLangFlag] = useState(false);
    const eyeSVG = <svg width="32px" height="17px" viewBox="0 0 32 17" version="1.1" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer opacity-75 hover:opacity-100" style={{ height: "22px" }}><ellipse fill="currentColor" cx="16" cy="8.5" rx="1.5" ry="1.41666667"></ellipse> <path d="M16,3.77777778 C13.25,3.77777778 11,5.90277778 11,8.5 C11,11.0972222 13.25,13.2222222 16,13.2222222 C18.75,13.2222222 21,11.0972222 21,8.5 C21,5.90277778 18.75,3.77777778 16,3.77777778 Z M16,12.0416667 C13.8749673,12.0416667 12.25,10.5069753 12.25,8.5 C12.25,6.49302469 13.8749673,4.95833333 16,4.95833333 C18.1250327,4.95833333 19.75,6.49302469 19.75,8.5 C19.75,10.5069753 18.1250327,12.0416667 16,12.0416667 Z" fill="currentColor"></path> <path d="M16,0 C4.92307692,0 0,8.5 0,8.5 C0,8.5 4.92307692,17 16,17 C27.0769231,17 32,8.5 32,8.5 C32,8.5 27.0769231,0 16,0 Z M16,16 C6.15384615,16 1.47692308,8.5 1.47692308,8.5 C1.47692308,8.5 6.15384615,1 16,1 C25.8461538,1 30.5230769,8.5 30.5230769,8.5 C30.5230769,8.5 25.8461538,16 16,16 Z" fill="currentColor"></path></svg>
    const uneyeSVG = <svg width="32px" height="22px" viewBox="0 0 32 22" version="1.1" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer opacity-75 hover:opacity-100" style={{ height: "22px" }
    }> <path d="M6.27386633,16.9588125 C1.96902882,14.3900158 0,10.9714286 0,10.9714286 C0,10.9714286 4.92257204,2.41537566 15.9967505,2.41537566 C17.5989994,2.41537566 19.0725536,2.53678343 20.4238479,2.90100674 L19.4392692,3.87865879 C18.3325592,3.75725102 17.2257204,3.63584325 15.9966861,3.63584325 C6.15154202,3.63584325 1.4734899,10.9714286 1.4734899,10.9714286 C1.4734899,10.9714286 3.32025876,13.9043847 7.13605643,16.1025044 L6.27386633,16.9588125 Z M11.0741784,10.9714286 C11.0741784,11.3356519 11.0741784,11.7062651 11.1964384,12.0704884 L12.3032127,10.9714286 C12.3032127,9.99377652 12.6699926,9.13753224 13.4099871,8.40269573 C14.1499816,7.66785922 15.134496,7.30363591 15.9967505,7.30363591 L17.1035892,6.20457609 C16.7367449,6.08316832 16.3635947,6.08316832 15.9967505,6.08316832 C13.2877272,6.08316832 11.0741784,8.28128796 11.0741784,10.9714286 Z M25.7195702,4.98410849 L24.8574445,5.84035277 C28.6731778,8.03847242 30.520011,10.9714286 30.520011,10.9714286 C30.520011,10.9714286 25.8418945,18.3070139 15.9967505,18.3070139 C14.7677161,18.3070139 13.6609418,18.18567 12.5541674,18.0641984 L11.569653,19.0418504 C12.9209473,19.4060737 14.4009363,19.5275454 16.0031852,19.5275454 C27.077428,19.5275454 32,10.9714925 32,10.9714925 C32,10.9714925 30.0244721,7.55284133 25.7195702,4.98410849 Z M25.8290251,0 L4.94831098,20.7351693 L6.16447584,21.9428571 L27.0516247,1.20129794 L25.8290251,0 Z M18.5835782,13.5402253 C17.8435837,14.2750618 16.9813292,14.6392851 15.9967505,14.6392851 L14.8899761,15.7382811 C15.256756,15.8596888 15.6299706,15.8596888 15.9967505,15.8596888 C18.7057094,15.8596888 20.9193225,13.6615692 20.9193225,10.9714286 C20.9193225,10.6072053 20.9193225,10.2365921 20.7970625,9.87236875 L19.6902882,10.9714286 C19.6902882,11.9490806 19.3170092,12.8053888 18.5835782,13.5402253 Z" fill="currentColor"></path></svg >
    return (
        <div className="w-1280 h-screen flex-col justify-center flex">
            <div className="hidden items-center mb-7 primary w-full flex justify-center" style={{ height: "30px" }}>
                <a href="/" aria-current="page" className="hidden xl:flex items-center mb-20 cursor-pointer block">
                    <svg width="42" height="48" viewBox="0 0 65 75" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo text-primary mr-5">
                        <path fillRule="evenodd" clipRule="evenodd" d="M57.4774 40.1845V26.6067H0.144043V0.685791H64.144V13.6462H57.4774V7.16602H6.81071V20.1265H64.144V41.2196C64.0363 51.5228 58.1035 59.9743 48.2911 66.6987C44.8255 69.0737 41.1078 71.0633 37.3811 72.6845C36.0675 73.256 34.8427 73.7417 33.7381 74.1431C33.0572 74.3906 32.513 74.5727 32.2704 74.6463L32.1405 74.6858L32.0108 74.6458C31.739 74.5621 31.2245 74.3898 30.5455 74.1429C29.4408 73.7412 28.2165 73.2556 26.9034 72.6842C23.1772 71.0627 19.4603 69.0733 15.9952 66.6984C6.27684 60.0376 0.365082 51.6825 0.150114 41.5112H0.144043V33.0869H6.81071V40.1845C6.81071 47.9967 11.0121 54.5315 18.2191 59.8741C20.8805 61.847 23.8111 63.5472 26.8494 64.9836C28.8637 65.9358 30.6774 66.6589 32.1449 67.1623C33.6109 66.6596 35.4255 65.9362 37.4399 64.9839C40.478 63.5476 43.4086 61.8474 46.0699 59.8744C53.2768 54.5317 57.4774 47.9967 57.4774 40.1845Z" fill="currentColor"></path>
                    </svg>
                    <span className="font-bold text-5xl">Hivesigner</span>
                </a>
            </div>
            <div className="grid gap-2.5 xl:gap-40 grid-cols-2 items-center justify-center sm:mb-10 xl:mb-20">
                <div className="col-span-2 xl:col-span-1 sm:mb-6 xl:mb-0">
                    <img src={AuthSvg} alt="AuthSvg" draggable={false} className="block mx-auto image mb-16 sm:mb-0" />
                </div>
                <div className="col-span-2 xl:col-span-1 sm:mb-6 xl:mb-0">
                    <a href="/" aria-current="page" className="hidden xl:flex items-center mb-20 cursor-pointer block">
                        <svg width="42" height="48" viewBox="0 0 65 75" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo text-primary mr-5">
                            <path fillRule="evenodd" clipRule="evenodd" d="M57.4774 40.1845V26.6067H0.144043V0.685791H64.144V13.6462H57.4774V7.16602H6.81071V20.1265H64.144V41.2196C64.0363 51.5228 58.1035 59.9743 48.2911 66.6987C44.8255 69.0737 41.1078 71.0633 37.3811 72.6845C36.0675 73.256 34.8427 73.7417 33.7381 74.1431C33.0572 74.3906 32.513 74.5727 32.2704 74.6463L32.1405 74.6858L32.0108 74.6458C31.739 74.5621 31.2245 74.3898 30.5455 74.1429C29.4408 73.7412 28.2165 73.2556 26.9034 72.6842C23.1772 71.0627 19.4603 69.0733 15.9952 66.6984C6.27684 60.0376 0.365082 51.6825 0.150114 41.5112H0.144043V33.0869H6.81071V40.1845C6.81071 47.9967 11.0121 54.5315 18.2191 59.8741C20.8805 61.847 23.8111 63.5472 26.8494 64.9836C28.8637 65.9358 30.6774 66.6589 32.1449 67.1623C33.6109 66.6596 35.4255 65.9362 37.4399 64.9839C40.478 63.5476 43.4086 61.8474 46.0699 59.8744C53.2768 54.5317 57.4774 47.9967 57.4774 40.1845Z" fill="currentColor"></path>
                        </svg>
                        <span className="font-bold text-5xl">Hivesigner</span>
                    </a>
                    {/* main body start*/}
                    <div className="mb-2">
                        <div className="text-left">
                            <div className="form-control mb-4">
                                <div className="flex items-center text-lg text-black-500 mb-2">
                                    <label className="flex items-center">
                                        Username
                                    </label>
                                    <span className="mx-1">/</span>
                                    <div className="text-primary">
                                        Hive username is required
                                    </div>
                                </div>
                                <div className="w-544 h-58 flex border rounded-5 overflow-hidden border-[#d6d6d6] hover:border-[#3b3b3b]">
                                    <div className="w-58 h-full flex justify-center items-center"><span data-v-465e7abe="" className="text-xl text-gray mb-0.5">@</span></div>
                                    <div>
                                        <input className="w-486 h-full" placeholder="Hive username, e.g. ecency" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-control mb-4">
                                <div className="flex items-center text-lg text-black-500 mb-2">
                                    <label className="flex items-center">
                                        Private key
                                    </label>
                                </div>
                                <div className="w-544 h-58 flex border rounded-5 pl-5 overflow-hidden border-[#d6d6d6] hover:border-[#3b3b3b]">
                                    <div>
                                        <input className="w-460 h-full" placeholder="Hive username, e.g. ecency" />
                                    </div>
                                    <div className="w-58 h-full flex justify-center items-center">
                                        <div className="flex items-center justify-center">
                                            {eyeSVG}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                            <button data-v-465e7abe="" data-e2e="import-user-form-submit-next" className="importBtn button-primary w-full block mb-2">
                                Continue
                            </button>
                            <div data-v-465e7abe="" className="text-gray text-lg pt-4">
                                Don`t have an account?
                                <a data-v-465e7abe="" href="https://signup.hive.io" target="_blank" rel="noopener" data-e2e="import-user-form-signup-here" className="text-black-500 hover:underline sign-up">Signup here</a></div>
                        </div>
                    </div>
                    {/* main body end*/}
                    <div className="flex w-full pt-28 hidden sm:flex items-center justify-between">
                        <a href="/apps" className="text-gray py-1.5 text-lg hover:text-primary cursor-pointer">Apps</a>
                        <a href="/accounts" className="text-gray py-1.5 text-lg hover:text-primary cursor-pointer">Accounts</a>
                        <a href="/signs" className="text-gray py-1.5 text-lg hover:text-primary cursor-pointer">Signer</a>
                        <a href="https://docs.hivesigner.com/" className="text-gray py-1.5 text-lg hover:text-primary cursor-pointer">Docs</a>
                        <a href="/about" className="text-gray py-1.5 text-lg hover:text-primary cursor-pointer">About</a>
                        <a href="/login?redirect=accounts" className="text-gray py-1.5 text-lg hover:text-primary cursor-pointer">Login</a>
                        <div className="dropdown relative py-1.5">
                            {langFlag === true && <div className="overlay inset-0 fixed bg-black-400 opacity-40 duration-500 z-30" onClick={() => setLangFlag(false)} />}
                            <div className="dropdown-trigger cursor-pointer with-chevron flex items-center text-black-light hover:text-primary" onClick={() => setLangFlag(true)}>
                                <span className="text-lg uppercase">en</span>
                                <div className="icon ml-1">
                                    <svg width="10" height="5" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.726562 1.2124L6.16629 5.93117L11.3967 1.39391" stroke="currentColor" strokeWidth="2"></path></svg>
                                </div>
                            </div>
                            {langFlag === true && <div className="dropdown-menu flex flex-col bg-white absolute m-2 duration-500 z-30 -bottom-2 -right-2 p-6" style={{ width: "313px" }}>
                                <div className="icon absolute right-4 top-4 cursor-pointer text-gray hover:text-black" onClick={() => setLangFlag(false)} >
                                    <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.08252 9.01685L24.248 25.1823" stroke="currentColor" strokeWidth="2"></path> <path d="M24.248 9.01697L8.08256 25.1825" stroke="currentColor" strokeWidth="2"></path> <path d="M8.08252 9.01685L24.248 25.1823" stroke="currentColor" strokeWidth="2"></path> <path d="M24.248 9.01697L8.08256 25.1825" stroke="currentColor" strokeWidth="2"></path></svg>
                                </div>
                                <a role="button" className="cursor-pointer py-1 hover:text-primary">
                                    English
                                </a>
                                <a role="button" className="cursor-pointer py-1 hover:text-primary">
                                    Русский
                                </a>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
export default Import;
