
const Nav = () => {
      return (
            <nav>
                  <div className="navbar bg-base-100">
                        <div className="flex-1">
                              <a className=" cursor-pointer font-bold text-2xl">Knowledge Cafe</a>
                        </div>
                        <div className="flex-none">

                              <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                          <div className="w-10 rounded-full">
                                                <img
                                                      alt="Tailwind CSS Navbar component"
                                                      src="https://randomuser.me/api/portraits/women/3.jpg" />
                                          </div>
                                    </div>
                                    <ul
                                          tabIndex={0}
                                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                          <li>
                                                <a className="justify-between">
                                                      Profile
                                                      <span className="badge">New</span>
                                                </a>
                                          </li>
                                          <li><a>Settings</a></li>
                                          <li><a>Logout</a></li>
                                    </ul>
                              </div>
                        </div>
                  </div>
            </nav>
      );
};

export default Nav;