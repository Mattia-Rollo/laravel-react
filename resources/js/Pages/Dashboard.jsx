import Modal from "@/Components/Modal";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
// import { useEffect } from "react/cjs/react.production.min";

export default function Dashboard(props) {
    const { flash } = usePage().props;
    const [modal, setModal] = useState(false);

    const closeModal = () => {
        setModal(false);
    };

    const showAlert = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        });
        Toast.fire({
            icon: "success",
            title: flash.message,
        });
    };

    useEffect(() => {
        console.log(props);
        if (flash.message) {
            showAlert();
            // setModal(false);
        }
    }, []);

    return (
        <AuthenticatedLayout
            auth={props.auth}
            errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {} {flash.message}
                        </div>
                    </div>
                </div>
            </div>
            {/* <Modal show={modal} onClose={closeModal}>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                    {flash.message}
                </h2>
            </Modal> */}
        </AuthenticatedLayout>
    );
}
