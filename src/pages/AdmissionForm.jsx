import Breadcrumbs from "../components/Breadcrumbs";
import { useForm } from 'react-hook-form';

const AdmissionForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    return (
        <section>
            <Breadcrumbs title='Admission Form' />
            <div className="container py-20">
                <div className="text-center max-w-lg mx-auto mb-14">
                    <h1 className="text-navy text-5xl font-bold mb-5 drop-shadow-lg">Admission Form</h1>
                    <p className="text-gray">Explore our list of top colleges known for their exceptional educational standards</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto">
                    <div className='flex flex-col lg:flex-row items-start gap-4'>
                        <div className='w-full'>
                            <label className='text-gray' htmlFor="candidateName">Candidate Name:</label>
                            <input id='candidateName' defaultValue={'user?.displayName'} {...register("candidateName", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                            {errors.candidateName && <span className='text-red'>This field is required</span>}
                        </div>

                        <div className='w-full'>
                            <label className='text-gray' htmlFor="candidateEmail">Candidate Email:</label>
                            <input type='email' id='candidateEmail' defaultValue={'user?.email'} {...register("candidateEmail", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                            {errors.candidateEmail && <span className='text-red'>This field is required</span>}
                        </div>


                        <div className='w-full'>
                            <label className='text-gray' htmlFor="candidateNumber">Candidate Phone number:</label>

                            <input id='candidateNumber' placeholder='Enter Candidate Phone number' {...register("candidateNumber", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                            {errors.candidateNumber && <span className='text-red'>This field is required</span>}
                        </div>
                    </div>

                    <div className='w-full flex flex-col md:flex-row gap-4 mt-4'>
                        <div className='w-full'>
                            <label className='text-gray' htmlFor="collegeName">College Name:</label>
                            <input id='collegeName' placeholder="Enter College name" {...register("collegeName", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                            {errors.collegeName && <span className='text-red'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                            <label className='text-gray' htmlFor="subject">Subject Name:</label>
                            <input id='subject' placeholder='Enter your Subject' {...register("subject", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                            {errors.subject && <span className='text-red'>This field is required</span>}
                        </div>
                    </div>

                    <div className='w-full mt-4'>
                        <label className='text-gray' htmlFor="Image URL">Image URL:</label>
                        <input id='imageURL' placeholder='Image URL' {...register("imageURL", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                        {errors.imageURL && <span className='text-red'>This field is required</span>}
                    </div>

                    <div className='mt-4 flex flex-col md:flex-row items-end gap-4'>
                        <div className='w-full mt-4'>
                            <label className='text-gray' htmlFor="address">Address:</label>
                            <input id='address' placeholder='Write address' {...register("address", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                            {errors.address && <span className='text-red'>This field is required</span>}
                        </div>
                        <div className='w-full'>
                            <label className='text-gray' htmlFor="birthDay">Date of Birth:</label>
                            <input type="date" id='birthDay' placeholder='Date of Birth' {...register("birthDay", { required: true })} className='w-full border border-green py-2 px-3 rounded-md outline-none' />
                            {errors.birthDay && <span className='text-red'>This field is required</span>}
                        </div>

                        <div className='w-full'>
                            <button className='overflow-hidden btn_primary w-full border border-green' >Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AdmissionForm;