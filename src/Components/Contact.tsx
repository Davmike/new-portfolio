function Contact() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#181A1B] text-white p-4"
      id="contact"
    >
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mt-[30px] md:text-3xl">
          Contact me
        </h1>
        <div className="w-full flex justify-center items-center flex-col mb-8">
          <div className="w-5 h-1 bg-green-500 mt-1"></div>
          <p className="text-[14px]">mikeladzedav@gmail.com</p>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block text-lg font-medium mb-2">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="What you're writing about?"
              className="w-full bg-[#242424] border border-gray-600 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Full message comes here..."
              className="w-full bg-[#242424] border border-gray-600 rounded-md p-2 text-white h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="mt-[10px] border-none rounded-[4px] bg-[#57CF57] pointer font-bold text-[1.15rem] px-[15px] py-[8px] checkout"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
