import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

export const AddModal = (props) => {
  const { toggleModal, isOpen, create, tableType } = props;
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    create(formData);
    setFormData({});
  };

  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => toggleModal(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create
                  </Dialog.Title>
                  <div className="mt-2 ">
                    <form action="" onSubmit={handleSubmit}>
                      {tableType === "users" ? (
                        <>
                          <div className="w-full mb-4">
                            <label className="mt-11">Name:</label>
                            <input
                              className="border w-full "
                              type="text"
                              id="Name"
                              value={formData?.Name}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  Name: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="w-full mb-4">
                            <label className="mt-11">email:</label>
                            <input
                              className="border w-full "
                              type="text"
                              id="email"
                              value={formData?.email}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  email: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="w-full mb-4">
                            <label className="mt-11">imgSrc:</label>
                            <input
                              className="border w-full "
                              type="text"
                              id="imgSrc"
                              value={formData?.imgSrc}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  imgSrc: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="w-full mb-4">
                            <label className="mt-11">phone:</label>
                            <input
                              className="border w-full "
                              type="text"
                              id="phone"
                              value={formData?.phone}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  phone: e.target.value,
                                })
                              }
                            />
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="w-full mb-4">
                            <label className="mt-11">product name:</label>
                            <input
                              className="border w-full "
                              type="text"
                              id="productName"
                              value={formData?.productName}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  productName: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="w-full mb-4">
                            <label className="mt-11">price:</label>
                            <input
                              className="border w-full "
                              type="text"
                              id="price"
                              value={formData?.price}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  price: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="w-full mb-4">
                            <label className="mt-11">imgSrc:</label>
                            <input
                              className="border w-full "
                              type="text"
                              id="imgSrc"
                              value={formData?.imgSrc}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  imgSrc: e.target.value,
                                })
                              }
                            />
                          </div>
                        </>
                      )}

                      <div className="mt-4">
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={() => toggleModal(false)}
                        >
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
