'use client'
import { useState } from "react"
import axios from 'axios'

interface FormData {
    applicantName: string;
    employerName: string;
    nationality: string;
    dateFrom: string;
    dateTo: string;
    passportNumber: string;
    employmentType: string;
    longTermTrainee: string;
  }
  
  const initialFormData: FormData = {
    applicantName: '',
    employerName: '',
    nationality: '',
    dateFrom: '',
    dateTo: '',
    passportNumber: '',
    employmentType: '',
    longTermTrainee: '',
  };
  
  const initialFormErrors: FormData = {
    applicantName: '',
    employerName: '',
    nationality: '',
    dateFrom: '',
    dateTo: '',
    passportNumber: '',
    employmentType: '',
    longTermTrainee: '',
  };
export default function LongTermPermit(){
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [formErrors, setFormErrors] = useState<FormData>(initialFormErrors);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Perform form validation here
        // If there are errors, update the formErrors state and return

        // If the form is valid, send the data to the API endpoint
        try{
            const response = await axios.post('https://labour.26digitaldev.com/api/long-term-permits/',formData)
        }catch(error){
            // Handle any error from the API request
        }
    }

    const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
      
    return(
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>     
            
     <h1>Application For Long-Term Permit</h1>           
<form onSubmit={handleSubmit}>
  <div className="grid grid-cols-3 gap-4">
  <div className="mb-6">
    <label htmlFor="applicantName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Applicant name</label>
    <input 
    type="text" 
    id="applicantName" 
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required
    />
  </div>
  <div className="mb-6">
    <label htmlFor="applicant_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employer name</label>
    <input 
    type="text" 
    id="applicant_name" 
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required
    />
  </div>
  <div className="mb-6">
    <label htmlFor="applicant_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nationality</label>
    <input 
    type="text" 
    id="applicant_name" 
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required
    />
  </div>
  <div className="mb-6">
    <label htmlFor="applicant_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date from</label>
    <input 
    type="text" 
    id="applicant_name" 
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required
    />
  </div>
  <div className="mb-6">
    <label htmlFor="applicant_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date to</label>
    <input 
    type="text" 
    id="applicant_name" 
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required
    />
  </div>
  <div className="mb-6">
    <label htmlFor="applicant_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Passport number</label>
    <input 
    type="text" 
    id="applicant_name" 
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required
    />
  </div>
  <div className="mb-6">
    <label htmlFor="applicant_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Employment type</label>
    <input 
    type="text" 
    id="applicant_name" 
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required
    />
  </div>
  <div className="mb-6">
    <label htmlFor="applicant_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Long-term trainee</label>
    <input 
    type="text" 
    id="applicant_name" 
    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name" required
    />
  </div>

  </div>
  <div>
  <div>   
    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Conditions</label>
    <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
  </div>
  <div>   
    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Variation of conditions</label>
    <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
  </div>
  <div className="flex items-center justify-center w-full">
    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div> 
  </div>
  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input 
      id="terms" 
      type="checkbox" 
      value="" 
      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
    </div>
    <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
        </main>
    ) 
}