import { EmptyCartImg } from '../Assets'
import { toast } from 'react-toastify';
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../../firebase.config";
const Form = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await addDoc(collection(firestore, "Contact"), { name, email, message, subject });
    if (res.id) {
      return toast.success(`Form Submitted Successfully`, {
        position: 'top-left',
        autoClose: 3000,
        toastId: 'form'
      })
    }
    return toast.error(`An Error Occured!`, {
      position: 'top-left',
      autoClose: 3000,
      toastId: 'form'
    })
  }
  return (
    <div className="h-full w-full flex items-center flex-col justify-center px-4 bg-primary">
      <img src={EmptyCartImg} alt="not found" className="w-[30%] h-[30%]" />
      <form action="#" className="mb-6 w-full flex itemx-center justify-center gap-y-3 flex-col" onSubmit={submitForm} >
        <div className="mb-6">
          <input
            type="text"
            className="form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
            placeholder="Your Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            className="form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
            placeholder="Email Address"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            type="text"
            className="form-control block w-full px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
            placeholder="Subject"
            value={subject}
            required
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <textarea
            className="form-control block w-full min-h-[25vh] px-4 py-2  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none resize-none"
            placeholder="Message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-orange-600 hover:bg-orange-700 w-full focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 focus:outline-none dark:focus:ring-orange-800 block"

        >
          Send Message
        </button>
      </form>
      <p className="mb-2 cursor-pointer text-sm text-gray-500 dark:text-gray-400">
        <a href="mailto:rukkycusine@gmail.com" className="hover:underline">
          rukkycusine@gmail.com
        </a>
      </p>
      <p className="text-sm cursor-pointer text-gray-500 dark:text-gray-400">
        <a href="tel:+2347032054367" className="hover:underline">
          +2347032054367
        </a>
      </p>
    </div>
  );
};

export default Form;
