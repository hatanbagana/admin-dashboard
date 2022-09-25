import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

export const TableModal = (props) => {
  const { toggleModal, isOpen, editValue, updateValue } = props;
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);

  useEffect(() => {
    console.log(editValue);
    setFormData(editValue);
  }, [editValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    updateValue(formData);
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
                    {editValue ? "Edit" : "Create"}
                  </Dialog.Title>
                  <div className="mt-2 ">
                    <form action="" onSubmit={handleSubmit}>
                      {editValue ? (
                        <>
                          {Object.entries(formData).map(([key, value]) => (
                            <div className="w-full mb-4" key={key}>
                              <label htmlFor={key} id={key} className="mt-11">
                                {key}:
                              </label>
                              <input
                                className="border w-full "
                                type="text"
                                id={key}
                                value={value}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    [key]: e.target.value,
                                  })
                                }
                              />
                            </div>
                          ))}
                        </>
                      ) : (
                        <>
                          {Object.entries(formData).map(([key, value]) => (
                            <div className="w-full mb-4" key={key}>
                              <label htmlFor={key} id={key} className="mt-11">
                                {key}:
                              </label>
                              <input
                                className="border w-full "
                                type="text"
                                id={key}
                                value={value}
                                onChange={(e) =>
                                  setFormData({
                                    ...formData,
                                    [key]: e.target.value,
                                  })
                                }
                              />
                            </div>
                          ))}
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
