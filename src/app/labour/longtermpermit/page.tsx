'use client'
import { useState } from "react"
import axios from 'axios'


interface FormData {
    applicant_name: string;
    employer_name: string;
    nationality: string;
    date_from: string;
    date_to: string;
    condition: string,
    variation_of_conditions: string,
    authorized_officer: string,
    passport_number: string;
    terms: boolean,
    employment_type: string;
    long_term_trainee: string;
    trainee_at_expiry: string;
  }
  
  const initialFormData: FormData = {
    applicant_name: '',
    employer_name: '',
    nationality: '',
    date_from: '',
    date_to: '',
    condition: '',
    variation_of_conditions: '',
    authorized_officer: '',
    passport_number: '',
    terms:false,
    employment_type: '',
    long_term_trainee: '',
    trainee_at_expiry:'',
  };
  
  const initialFormErrors: FormData = {
    applicant_name: '',
    employer_name: '',
    nationality: '',
    date_from: '',
    date_to: '',
    condition: '',
    variation_of_conditions: '',
    authorized_officer: '',
    passport_number: '',
    terms:false,
    employment_type: '',
    long_term_trainee: '',
    trainee_at_expiry:'',
  };
export default function LongTermPermit(){
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [formErrors, setFormErrors] = useState<FormData>(initialFormErrors);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        console.log("Hello")
        event.preventDefault();

        // Perform form validation here
        // If there are errors, update the formErrors state and return

        // If the form is valid, send the data to the API endpoint
        try{
            const response = await axios.post(
                'https://labour.26digitaldev.com/api/long-term-permits/',
                formData
                )
            window.open('/next-page', '_blank')
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
     <form>
      <div className="grid grid-cols-3 gap-4">
        <div className="mb-6">
          <label htmlFor="applicant_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Applicant name
          </label>
          <input
            type="text"
            id="applicant_name"
            name="applicant_name"
            value={formData.applicant_name}
            onChange={handleInputChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Name"
            required
          />
          {/* Display validation error message if applicable */}
          {formErrors.applicant_name && (
            <p className="text-red-500 text-sm">{formErrors.applicant_name}</p>
          )}
        </div>

        <div className="mb-6">
          <label htmlFor="employer_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Employer name
          </label>
          <input
            type="text"
            id="employer_name"
            name="employer_name"
            value={formData.employer_name}
            onChange={handleInputChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Name"
            required
          />
          {/* Display validation error message if applicable */}
          {formErrors.employer_name && (
            <p className="text-red-500 text-sm">{formErrors.employer_name}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="nationality" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Nationality
          </label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleInputChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Name"
            required
          />
          {/* Display validation error message if applicable */}
          {formErrors.nationality && (
            <p className="text-red-500 text-sm">{formErrors.nationality}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="date_from" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Date from
          </label>
          <input
            type="text"
            id="date_from"
            name="date_from"
            value={formData.date_from}
            onChange={handleInputChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Name"
            required
          />
          {/* Display validation error message if applicable */}
          {formErrors.date_from && (
            <p className="text-red-500 text-sm">{formErrors.date_from}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="date_to" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Date to
          </label>
          <input
            type="text"
            id="date_to"
            name="date_to"
            value={formData.date_to}
            onChange={handleInputChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Name"
            required
          />
          {/* Display validation error message if applicable */}
          {formErrors.date_to && (
            <p className="text-red-500 text-sm">{formErrors.date_to}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="date_to" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Passport number
          </label>
          <input
            type="text"
            id="passport_number"
            name="passport_number"
            value={formData.passport_number}
            onChange={handleInputChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Name"
            required
          />
          {/* Display validation error message if applicable */}
          {formErrors.passport_number && (
            <p className="text-red-500 text-sm">{formErrors.passport_number}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="employment_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Employment Type
          </label>
          <input
            type="text"
            id="employment_type"
            name="employment_type"
            value={formData.employment_type}
            onChange={handleInputChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Name"
            required
          />
          {/* Display validation error message if applicable */}
          {formErrors.employment_type && (
            <p className="text-red-500 text-sm">{formErrors.employment_type}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="trainee_at_expiry" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Trainee at Expiry
          </label>
          <input
            type="text"
            id="trainee_at_expiry"
            name="trainee_at_expiry"
            value={formData.trainee_at_expiry}
            onChange={handleInputChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Name"
            required
          />
          {/* Display validation error message if applicable */}
          {formErrors.trainee_at_expiry && (
            <p className="text-red-500 text-sm">{formErrors.trainee_at_expiry}</p>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="authorized_officer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Authorized officer
          </label>
          <input
            type="text"
            id="authorized_officer"
            name="authorized_officer"
            value={formData.authorized_officer}
            onChange={handleInputChange}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Name"
            required
          />
          {/* Display validation error message if applicable */}
          {formErrors.authorized_officer && (
            <p className="text-red-500 text-sm">{formErrors.authorized_officer}</p>
          )}
      </div>
      </div>
      <div>
        <div>
          <label htmlFor="condition" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Conditions
          </label>
          <textarea
            id="conditions"
            name="conditions"
            value={formData.condition}
            onChange={handleInputChange}
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Conditions..."
          ></textarea>
          {/* Display validation error message if applicable */}
          {formErrors.condition && (
            <p className="text-red-500 text-sm">{formErrors.condition}</p>
          )}
        </div>

        {/* Add the remaining textarea fields with validation and error handling */}
        {/* ... */}
        <div>
          <label htmlFor="variation_of_conditions" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Variation of Conditions
          </label>
          <textarea
            id="conditions"
            name="conditions"
            value={formData.variation_of_conditions}
            onChange={handleInputChange}
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Conditions..."
          ></textarea>
          {/* Display validation error message if applicable */}
          {formErrors.variation_of_conditions && (
            <p className="text-red-500 text-sm">{formErrors.variation_of_conditions}</p>
          )}
        </div>

        <div className="flex items-center justify-center w-full">
          {/* Add file upload functionality */}
          {/* ... */}
        </div>
      </div>

      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            name="terms"
            checked={true}
            onChange={handleInputChange}
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>
        </label>
        {/* Display validation error message if applicable */}
        {formErrors.terms && (
          <p className="text-red-500 text-sm">{formErrors.terms}</p>
        )}
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
        </main>
    ) 
}