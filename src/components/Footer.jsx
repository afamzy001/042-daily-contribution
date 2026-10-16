import {
    FiFacebook,
    FiInstagram,
    FiTwitter,
    FiMail,
    FiPhone,
    FiMapPin,
} from "react-icons/fi";
import { FiArrowDownRight } from "react-icons/fi";





function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-[#012d1b]">

            {/* Main Footer */}
            <div className="mx-auto max-w-7xl px-5 py-12 sm:py-16 lg:px-8">

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="sm:col-span-2 lg:col-span-1">

                        <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-700 text-xl font-bold text-white">
                                ₦
                            </div>

                            <div>
                                <h2 className="font-bold text-slate-100">
                                    Padi-Save
                                </h2>

                                <p className="text-[10px] text-slate-100">
                                    Daily Contribution, Better Future
                                </p>
                            </div>

                        </div>

                        <p className="mt-5 max-w-sm text-sm leading-6 text-slate-100">
                            Helping Nigerians build better saving habits through
                            simple, consistent daily contributions.
                        </p>

                        {/* Social Icons */}
                        <div className="mt-6 flex items-center gap-3">

                            <SocialIcon icon={<FiFacebook />} />

                            <SocialIcon icon={<FiInstagram />} />

                            <SocialIcon icon={<FiTwitter />} />

                        </div>

                    </div>

                    {/* Company */}
                    <FooterColumn
                        title="Company"
                        links={[
                            "About Us",
                            "How It Works",
                            "Features",
                            "FAQs",
                        ]}
                    />

                    {/* Support */}
                    <FooterColumn
                        title="Support"
                        links={[
                            "Help Center",
                            "Contact Us",
                            "Privacy Policy",
                            "Terms & Conditions",
                        ]}
                    />

                    {/* Contact */}
                    <div>

                        <h3 className="text-xm font-bold text-slate-100">
                            Contact Us
                        </h3>

                        <div className="mt-5 space-y-4">

                            <ContactItem
                                icon={<FiMail />}
                                text="Padi-save@gmail.com.com"
                            />

                            <ContactItem
                                icon={<FiPhone />}
                                text="+234 7060900070/+234 9037157074"

                            />

                            <ContactItem
                                icon={<FiMapPin />}
                                text="Enugu, Nigeria"
                            />

                        </div>

                    </div>

                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-slate-100">

                <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-8">

                    <p className="text-xs text-slate-100 sm:text-sm">
                        © {new Date().getFullYear()} Padi-save. All rights reserved.
                    </p>

                    <p className="text-xs text-slate-100 sm:text-sm">
                        Built for better financial habits 🇳🇬
                    </p>

                </div>

            </div>

        </footer>
    );
}


function FooterColumn({ title, links }) {
    return (
        <div>

            <h3 className="text-xm font-bold text-slate-100">
                {title}
            </h3>

            <div className="mt-5 flex flex-col gap-3">

                {links.map((link) => (
                    <a
                        key={link}
                        href="#"
                        className="w-fit text-xs text-slate-100 transition hover:text-green-700"
                    >
                        {link}
                    </a>
                ))}

            </div>

        </div>
    );
}


function SocialIcon({ icon }) {
    return (
        <a
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-600 transition hover:bg-green-50 hover:text-green-700"
        >
            {icon}
        </a>
    );
}


function ContactItem({ icon, text }) {
    return (
        <div className="flex items-start gap-3">

            <span className="mt-0.5 text-green-700">
                {icon}
            </span>

            <span className="text-sm text-slate-100">
                {text}
            </span>

        </div>
    );
}


export default Footer;