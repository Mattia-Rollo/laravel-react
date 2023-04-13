import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import Form from '@/Components/Forms';
import { useState } from 'react';

export default function Product(props) {
    // const [active,setActive] = useState(false);

    // function toggle(){
    //     setActive(!active);
    // }
    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Product" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <h1 className=" text-gray-900 dark:text-gray-100 text-3xl pb-4">Product</h1>
                        <ul className='pb-6 text-gray-900 dark:text-gray-100'>
                            
                        
                            <li key={props.product.id}>{props.product.name} | {props.product.slug} | {props.product.description}</li>
                            

                        </ul>
                        <table className="w-full text-gray-900 table-fixed w-100 rounded-xl dark:text-gray-300 border-collapse border border-slate-900 ">
                            <thead>
                                <tr className='dark:bg-gray-700 bg-gray-100 '>
                                <th className='border border-slate-600 py-3'>Name</th>
                                <th className='border border-slate-600'>Slug</th>
                                <th className='border border-slate-600'>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    <tr key={props.product.id} className="text-gray-400">
                                    <td className='border border-slate-700 p-5 text-center'>{props.product.name}</td>
                                    <td className='border border-slate-700 p-5 text-center'>{props.product.slug}</td>
                                    <td className='border border-slate-700 p-5'>{props.product.description}</td>
                                    </tr>

                                }
                                
                            </tbody>
                        </table>

                        <div className='my-5'>
                        {/* <PrimaryButton action={toggle}>Add</PrimaryButton> */}

                        </div>
                        {/* {active && <Form />
                        } */}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
