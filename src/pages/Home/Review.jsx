import {
    Card,
    CardHeader,
    CardBody,
    
    Typography,
} from "@material-tailwind/react";
import user1 from '../../assets/user1.webp'



export default function Review() {
    return (
        <div className="maincontainer overflow-hidden pt-5 pb-5 bg-blue-100">
            <div className="container sm:container mx-auto md:container md:auto">
                <div className="headlinesboix lg:pt-5 lg:pb-10  flex justify-center">
                    <div className="biglines  mt-10">
                        <h1 className="fonting mx-auto max-w-5xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl">
                            Feedbacks
                        </h1>
                    </div>
                </div>
                <div className="contentbox grid lg:grid-cols-3 md:grid-cols-1 gap-8  justify-center  sm:grid-cols-1 mx-auto mt-5">
                    <Card className="w-full max-w-[26rem] shadow-lg">
                        <CardHeader floated={false} color="blue-gray">
                            <img
                                src={user1}
                                alt="ui/ux review check"
                                width={500}
                                height={100}
                            />
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                            
                        </CardHeader>
                        <CardBody>
                            <div className="mb-3 w-full flex items-center justify-between">
                                <Typography variant="h3" color="black" className="font-medium">
                                    Vishal Sharma
                                </Typography>
                                <Typography
                                    color="blue-gray"
                                    className="flex items-center gap-1.5 font-normal"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="-mt-0.5 h-5 w-5 text-yellow-700"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    4.0
                                </Typography>
                            </div>
                            <Typography color="black">
                                I recently had my Company's name registered as a trademark, and the entire process was seamless, thanks to the exceptional services provided by Online Texas. Special mention to Mayank, who guided me through every step of the legal formalities with utmost professionalism and efficiency. From understanding the requirements to filing the necessary paperwork, Mayank ensured that the process was hassle-free and completed in a timely manner.
                                I highly recommend Online Texas, for anyone looking to register their trademark.
                            </Typography>

                        </CardBody>
                        
                    </Card>
                    <Card className="w-full max-w-[26rem] shadow-lg">
                        <CardHeader floated={false} color="blue-gray">
                            <img
                                src={user1}
                                alt="ui/ux review check"
                                width={500}
                                height={100}
                            />
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                            
                        </CardHeader>
                        <CardBody>
                            <div className="mb-3 w-full flex items-center justify-between">
                                <Typography variant="h3" color="black" className="font-medium">
                                    Mohit Katoch
                                </Typography>
                                <Typography
                                    color="blue-gray"
                                    className="flex items-center gap-1.5 font-normal"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="-mt-0.5 h-5 w-5 text-yellow-700"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    4.5
                                </Typography>
                            </div>
                            <Typography color="black">
                            I recently used Online Texas for trademark registration, and I am highly impressed with their efficient and professional service. The process was smooth, and Mayank was particularly helpful, providing prompt responses and clear guidance throughout. I appreciated the team's expertise and dedication to resolving queries quickly. Thank you, Online Texas, for making this a hassle-free experience!
                            </Typography>

                        </CardBody>
                        
                    </Card>
                    <Card className="w-full max-w-[26rem] shadow-lg">
                        <CardHeader floated={false} color="blue-gray">
                            <img
                                src={user1}
                                alt="ui/ux review check"
                                width={500}
                                height={100}
                            />
                            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                            
                        </CardHeader>
                        <CardBody>
                            <div className="mb-3 w-full flex items-center justify-between">
                                <Typography variant="h3" color="black" className="font-medium">
                                    Avnish Arora
                                </Typography>
                                <Typography
                                    color="blue-gray"
                                    className="flex items-center gap-1.5 font-normal"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="-mt-0.5 h-5 w-5 text-yellow-700"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    4.2
                                </Typography>
                            </div>
                            <Typography color="black">
                            I had the pleasure of working with Online Texas, a highly professional and reliable legal consultancy firm. Their team, particularly Dimpee, provided exceptional support and guidance throughout our engagement. Dimpee's expertise and knowledge in his field are impressive. His communication skills are excellent, and he kept us informed every step of the way.
                            </Typography>

                        </CardBody>
                        
                    </Card>
                </div>
            </div>
        </div>
    );
}