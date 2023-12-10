import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import {
  BriefcaseIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  LinkIcon,
  MapPinIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";

export default function Home() {
  const navigate = useNavigate();

  function signUpClick() {
    navigate("/signup");
  }

  function signInClick() {
    navigate("/login");
  }

  return (
    <div className="lg:flex lg:items-center lg:justify-between p-10 bg-blue-950">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Home
        </h2>
      </div>
    </div>
  );
}
