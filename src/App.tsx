function App() {
  return (
    <div className="w-screen h-screen flex justify-center bg-gray-100">
      <button
        className=" h-min m-16 p-8 shadow-md bg-blue-700 text-gray-50 rounded-md"
        onClick={() =>
          (window.location.href = "https://www.linkedin.com/in/denizatlihan/")
        }
      >
        Linkedin: in/denizatlihan/
      </button>
    </div>
  );
}

export default App;
