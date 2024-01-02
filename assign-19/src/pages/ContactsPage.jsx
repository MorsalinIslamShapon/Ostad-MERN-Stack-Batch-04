import Button from '../componetnts/Button.JSx';

const ContactsPage = () => {
  return (
    <div className="container mx-auto mt-8  p-4">
      <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
      <p className='text-blue-500'><Button/></p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="mt-2 shadow-md rounded-md hover:border-black hover:border-collapse border-2 w-fit  p-2">
          <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
          <p>
            If you have any questions or need assistance with your order, our
            customer support team is here to help.
          </p>
          <p className="mt-2">
            Email: <a href="mailto:support@pemons.com">support@pemons.com</a>
          </p>
        </div>

        <div className="mt-2 shadow-md rounded-md hover:border-black hover:border-collapse border-2 w-fit  p-2">
          <h3 className="text-xl font-semibold mb-2">Business Inquiries</h3>
          <p>
            For business-related inquiries, partnerships, or collaboration
            opportunities, please contact us.
          </p>
          <p className="mt-2">
            Email: <a href="mailto:business@pemons.com">business@pemons.com</a>
          </p>
        </div>
      </div>

      <div className="mt-8 shadow-md rounded-md hover:border-black hover:border-collapse border-2 w-fit  p-2">
        <h3 className="text-xl font-semibold mb-2">Visit Our Office</h3>
        <p>
          Feel free to visit our office during business hours. Our address is:
        </p>
        <p className="mt-2">
          123 Main Street, City ville, State, ZIP
        </p>
      </div>
    </div>
  );
};

export default ContactsPage;
