function Navbar() {
  return (
    <div className="h-96">
      {/* Sidebar */}

      <div className=" m-auto flex items-center max-w-screen-xl justify-center h-full">
        <span className="font-bold">Paul Hive</span>
        <div className="flex gap-5">
          <a href="#">
            <img src="/facebook.png" alt="facebook" className="w-16 h-16" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
