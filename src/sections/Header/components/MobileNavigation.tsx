export const MobileNavigation = () => {
  return (
    <div className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] no-underline pl-9 pr-[40.5px] pt-[18px] md:hidden md:min-h-0 md:min-w-0">
      <nav
        aria-label=" menu"
        className="border-b-zinc-500/40 box-border caret-transparent outline-[3px] no-underline w-full pb-[18px] border-b"
      >
        <ul className="box-border caret-transparent list-none outline-[3px] no-underline w-full mb-5 pl-0 md:w-auto">
          <li className="box-border caret-transparent block leading-[27px] outline-[3px] no-underline w-full mb-[15px] md:list-item md:w-auto">
            <a
              href="https://www.bcsp.org/"
              className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis py-[3.6px] hover:text-black hover:border-black"
            >
              Home
            </a>
          </li>
          <li className="box-border caret-transparent block leading-[27px] outline-[3px] relative no-underline w-full mb-[15px] md:list-item md:w-auto">
            <a
              href="#"
              className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis py-[3.6px] hover:text-black hover:border-black"
            >
              <span className="box-border caret-transparent outline-[3px] no-underline w-full md:w-auto">
                About
              </span>
              <button
                aria-label="Toggle Menu"
                className="bg-transparent caret-transparent text-black block font-normal h-12 leading-[18px] outline-[3px] absolute text-center no-underline w-12 px-[11.88px] py-[4.5px] right-0 -top-2.5"
              >
                <img
                  src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/icon-6.svg"
                  alt="Icon"
                  className="box-border caret-transparent text-neutral-400 block h-4 outline-[3px] no-underline align-baseline w-full md:inline md:w-3.5"
                />
              </button>
            </a>
            <ul className="box-border caret-transparent text-[15.84px] max-h-0 opacity-0 outline-[3px] no-underline w-full z-10 overflow-hidden pl-[21.0672px] pb-[5.2272px] left-[180px] top-0 md:w-auto">
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/mission-vision"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Mission &amp; Vision
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/our-impact"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Our Impact
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/leadership"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Leadership
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/emerging-professionals-committee"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Emerging Professionals Committee
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/accreditation"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Accreditation &amp; Annual Reports
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/awards-of-excellence"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Awards &amp; Recognition
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/apply"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Join Our Team
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/bcsp-news"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  News
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/contact"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </li>
          <li className="box-border caret-transparent block leading-[27px] outline-[3px] relative no-underline w-full mb-[15px] md:list-item md:w-auto">
            <a
              href="#"
              className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis py-[3.6px] hover:text-black hover:border-black"
            >
              <span className="box-border caret-transparent outline-[3px] no-underline w-full md:w-auto">
                Certification
              </span>
              <button
                aria-label="Toggle Menu"
                className="bg-transparent caret-transparent text-black block font-normal h-12 leading-[18px] outline-[3px] absolute text-center no-underline w-12 px-[11.88px] py-[4.5px] right-0 -top-2.5"
              >
                <img
                  src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/icon-6.svg"
                  alt="Icon"
                  className="box-border caret-transparent text-neutral-400 block h-4 outline-[3px] no-underline align-baseline w-full md:inline md:w-3.5"
                />
              </button>
            </a>
            <ul className="box-border caret-transparent text-[15.84px] max-h-0 opacity-0 outline-[3px] no-underline w-full z-10 overflow-hidden pl-[21.0672px] pb-[5.2272px] left-[180px] top-0 md:w-auto">
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/credentials-at-a-glance"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Credentials At-A-Glance
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/certified-safety-professional-csp"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Certified Safety Professional® (CSP®)
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/safety-management-professional-smp"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Safety Management Professional® (SMP®)
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/associate-safety-professional-asp"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Associate Safety Professional® (ASP®)
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/occupation-hygiene-and-safety-technician-ohst"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Occupational Hygiene and Safety Technician® (OHST®)
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/construction-health-and-safety-technician-chst"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Construction Health and Safety Technician® (CHST®)
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/safety-trained-supervisor-sts"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Safety Trained Supervisor® (STS®)
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/safety-trained-supervisor-construction-stsc"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Safety Trained Supervisor Construction® (STSC®)
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/certified-instructional-trainer-cit"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Certified Instructional Trainer® (CIT®)
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/graduate-safety-practitioner-gsp"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Graduate Safety Practitioner® (GSP®)
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/transitional-safety-practitioner-tsp"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Transitional Safety Practitioner® (TSP®)
                </a>
              </li>
            </ul>
          </li>
          <li className="box-border caret-transparent block leading-[27px] outline-[3px] relative no-underline w-full mb-[15px] md:list-item md:w-auto">
            <a
              href="#"
              className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis py-[3.6px] hover:text-black hover:border-black"
            >
              <span className="box-border caret-transparent outline-[3px] no-underline w-full md:w-auto">
                For Companies
              </span>
              <button
                aria-label="Toggle Menu"
                className="bg-transparent caret-transparent text-black block font-normal h-12 leading-[18px] outline-[3px] absolute text-center no-underline w-12 px-[11.88px] py-[4.5px] right-0 -top-2.5"
              >
                <img
                  src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/icon-6.svg"
                  alt="Icon"
                  className="box-border caret-transparent text-neutral-400 block h-4 outline-[3px] no-underline align-baseline w-full md:inline md:w-3.5"
                />
              </button>
            </a>
            <ul className="box-border caret-transparent text-[15.84px] max-h-0 opacity-0 outline-[3px] no-underline w-full z-10 overflow-hidden pl-[21.0672px] pb-[5.2272px] left-[180px] top-0 md:w-auto">
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/business-solutions"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Business Solutions
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/bcsp-examcore-in-person"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  examCORE In-Person
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/onsite-exam-delivery"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Onsite Exam Delivery
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/workplace-safety-certification"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Workplace Safety &amp; Certification
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://jobs.bcsp.org/employer-offers"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Recruiting{" "}
                  <img
                    src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/external-link.svg"
                    className="box-border caret-transparent block h-[15px] max-w-full outline-[3px] no-underline align-bottom w-2.5 mb-[5px] md:inline"
                  />
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/dale-carnegie-leadership-course"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Dale Carnegie Leadership Course
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] relative no-underline w-full mb-[15px] md:list-item">
                <a
                  href="#"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Certification Champions
                  <button
                    aria-label="Toggle Menu"
                    className="bg-transparent caret-transparent text-black block font-normal h-12 leading-[18px] outline-[3px] absolute text-center no-underline w-12 px-[11.88px] py-[4.5px] right-0 -top-2.5"
                  >
                    <img
                      src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/icon-6.svg"
                      alt="Icon"
                      className="box-border caret-transparent text-neutral-400 block h-4 outline-[3px] no-underline align-baseline w-full md:inline md:w-3.5"
                    />
                  </button>
                </a>
                <ul className="box-border caret-transparent text-[15.84px] max-h-0 opacity-0 outline-[3px] no-underline w-full z-10 overflow-hidden pl-[21.0672px] pb-[5.2272px] left-[180px] top-0 md:w-auto">
                  <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item md:w-auto">
                    <a
                      href="https://www.bcsp.org/certification-champions/diamond"
                      className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                    >
                      Diamond
                    </a>
                  </li>
                  <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item md:w-auto">
                    <a
                      href="https://www.bcsp.org/certification-champions/emerald"
                      className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                    >
                      Emerald
                    </a>
                  </li>
                  <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item md:w-auto">
                    <a
                      href="https://www.bcsp.org/certification-champions/ruby"
                      className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                    >
                      Ruby
                    </a>
                  </li>
                  <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item md:w-auto">
                    <a
                      href="https://www.bcsp.org/certification-champions/sapphire"
                      className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                    >
                      Sapphire
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="box-border caret-transparent block leading-[27px] outline-[3px] relative no-underline w-full mb-[15px] md:list-item md:w-auto">
            <a
              href="#"
              className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis py-[3.6px] hover:text-black hover:border-black"
            >
              For Individuals
              <button
                aria-label="Toggle Menu"
                className="bg-transparent caret-transparent text-black block font-normal h-12 leading-[18px] outline-[3px] absolute text-center no-underline w-12 px-[11.88px] py-[4.5px] right-0 -top-2.5"
              >
                <img
                  src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/icon-6.svg"
                  alt="Icon"
                  className="box-border caret-transparent text-neutral-400 block h-4 outline-[3px] no-underline align-baseline w-full md:inline md:w-3.5"
                />
              </button>
            </a>
            <ul className="box-border caret-transparent text-[15.84px] max-h-0 opacity-0 outline-[3px] no-underline w-full z-10 overflow-hidden pl-[21.0672px] pb-[5.2272px] left-[180px] top-0 md:w-auto">
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://examcore.org/"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  BCSP examCORE{" "}
                  <img
                    src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/external-link.svg"
                    className="box-border caret-transparent block h-[15px] max-w-full outline-[3px] no-underline align-bottom w-2.5 mb-[5px] md:inline"
                  />
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/bcsp-self-assessments"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Self-Assessments
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://mentor.bcsp.org/"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Mentoring{" "}
                  <img
                    src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/external-link.svg"
                    className="box-border caret-transparent block h-[15px] max-w-full outline-[3px] no-underline align-bottom w-2.5 mb-[5px] md:inline"
                  />
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/recertification"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Recertification
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/bcsp-recertpro"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  BCSP recertPRO
                </a>
              </li>
            </ul>
          </li>
          <li className="box-border caret-transparent block leading-[27px] outline-[3px] relative no-underline w-full mb-[15px] md:list-item md:w-auto">
            <a
              href="#"
              className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis py-[3.6px] hover:text-black hover:border-black"
            >
              <span className="box-border caret-transparent outline-[3px] no-underline w-full md:w-auto">
                Resources
              </span>
              <button
                aria-label="Toggle Menu"
                className="bg-transparent caret-transparent text-black block font-normal h-12 leading-[18px] outline-[3px] absolute text-center no-underline w-12 px-[11.88px] py-[4.5px] right-0 -top-2.5"
              >
                <img
                  src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/icon-6.svg"
                  alt="Icon"
                  className="box-border caret-transparent text-neutral-400 block h-4 outline-[3px] no-underline align-baseline w-full md:inline md:w-3.5"
                />
              </button>
            </a>
            <ul className="box-border caret-transparent text-[15.84px] max-h-0 opacity-0 outline-[3px] no-underline w-full z-10 overflow-hidden pl-[21.0672px] pb-[5.2272px] left-[180px] top-0 md:w-auto">
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://bcsphub.com/"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  The HUB{" "}
                  <img
                    src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/external-link.svg"
                    className="box-border caret-transparent block h-[15px] max-w-full outline-[3px] no-underline align-bottom w-2.5 mb-[5px] md:inline"
                  />
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/policies-forms"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Policies &amp; Forms
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://directory.bcsp.org/"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Credential Holder Directory{" "}
                  <img
                    src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/external-link.svg"
                    className="box-border caret-transparent block h-[15px] max-w-full outline-[3px] no-underline align-bottom w-2.5 mb-[5px] md:inline"
                  />
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/safety-salary-calculator/"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Safety Salary Calculator
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://shiftr2p.com/?__hstc=188465719.972c87dc7ae60513ff8c657d710371f6.1788656106242.1788656106242.1788656106242.1&__hssc=188465719.1.1788656106242&__hsfp=3dae62b8868abeb50ee257317bb5df5d"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  SHIFT® Safety Journal{" "}
                  <img
                    src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/external-link.svg"
                    className="box-border caret-transparent block h-[15px] max-w-full outline-[3px] no-underline align-bottom w-2.5 mb-[5px] md:inline"
                  />
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/service-member-benefits"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Service Member Benefits
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/exam-development"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Exam Development
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/grants"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Grants &amp; Scholarships
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://jobs.bcsp.org/"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  BCSP Career Center{" "}
                  <img
                    src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/external-link.svg"
                    className="box-border caret-transparent block h-[15px] max-w-full outline-[3px] no-underline align-bottom w-2.5 mb-[5px] md:inline"
                  />
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/presentations-and-outreach"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Presentations &amp; Outreach
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/ambassadors"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  BCSP Ambassadors
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/affinity-products"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  BCSP Affinity Products
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/events"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  BCSP Events
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://gateway.on24.com/wcc/eh/4075289/bcsp-webinars"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  BCSP Webinars{" "}
                  <img
                    src="https://c.animaapp.com/5JQYkJ_WvkrM2bhLvDytRQ/assets/external-link.svg"
                    className="box-border caret-transparent block h-[15px] max-w-full outline-[3px] no-underline align-bottom w-2.5 mb-[5px] md:inline"
                  />
                </a>
              </li>
              <li className="box-border caret-transparent block text-lg outline-[3px] no-underline w-full mb-[15px] md:list-item">
                <a
                  href="https://www.bcsp.org/podcasts"
                  className="box-border caret-transparent text-stone-500 block font-bold max-w-full outline-[3px] no-underline text-ellipsis w-full py-[3.6px] hover:text-black hover:border-black"
                >
                  Podcasts
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};
