"use client"
import toast, { Toaster } from 'react-hot-toast';
export default function Contact() {
    const onSuccess = () => toast.success('Sent Successfully.');
    const onfaild = () => toast('Message not Sent.');
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_TOKEN_WEBFORM,
                    email: e.target.email.value,
                    mobile: e.target.mobile.value,
                    name: e.target.name.value,
                    message: e.target.message.value,
                }),
            });
            const result = await response.json();
            console.log("Contact response", result)
            if (result.success) {
                console.log(result);

                onSuccess()
            }
        } catch (error) {
            onfaild()
        }
    }

    return (
        <>


            <div className="">
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <div className="py-4 lg:py-16 px-4 mx-auto max-w-screen-md" id="contactus">
                    <div className=" flex justify-center">
                        <h1 className="  text-[40px] font-semibold   text-transparent   bg-clip-text bg-myGradientBg py-5">
                            Contact Us
                        </h1>
                    </div>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        We’re Here to Help you.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6 " >

                        <label
                            htmlFor="name"
                            className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Name
                        </label>

                        <input
                            type="text"
                            id="name"
                            className="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Jhon doe"
                            required
                        />


                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your email
                        </label>

                        <input
                            type="email"
                            id="email"
                            className="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="name@flowbite.com"
                            required
                        />

                        <label
                            htmlFor="mobile"
                            className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Mobile No.
                        </label>
                        <input
                            type="number"
                            id="mobile"
                            className="shadow-sm bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="+00123456789"
                            required
                        />

                        <input
                            type="hidden"
                            name="access_key"
                            value={process.env.NEXT_PUBLIC_TOKEN_WEBFORM}
                        ></input>

                        <div className="sm:col-span-2">
                            <label
                                htmlFor="message"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                            >
                                Your message
                            </label>
                            <textarea
                                id="message"
                                rows="6"
                                className="block p-2.5 w-full text-sm text-gray-900  rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Leave a comment..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="py-3 px-5 text-sm font-medium button-primary text-center text-white rounded-lg cursor-pointer   sm:w-fit "
                        >
                            Send message
                        </button>

                    </form>
                </div>
            </div>
        </>
    );
}
