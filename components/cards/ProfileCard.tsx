import React, { ReactNode } from "react";
import { GraduationCap, Mail, Phone, User } from "lucide-react";

// Define the shape of the props
interface ProfileCardProps {
  name: string;
  role: string;
  specialization: string;
  email: string;
  phone: string;
  imgSrc?: string; // Optional image source for profile picture
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  specialization,
  email,
  phone,
  imgSrc,
}) => {
  return (
    <div className="max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl border border-gray-100">
      {/* Header Section */}
      <div
        className={`bg-brand-secondary p-8 flex flex-col items-center text-center`}
      >
        {/* Profile Icon/Avatar Container */}
        <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-white/20">
          <User className="h-16 w-16 text-white" />
        </div>

        <h2 className="text-xl font-extrabold text-white uppercase">{name}</h2>
        <p className="mt-1 text-md font-medium text-body-bg-alt">{role}</p>
      </div>

      {/* Details Section */}
      <div className="p-8 space-y-6">
        {/* Specialization */}
        <InfoItem
          icon={<GraduationCap size={24} />}
          label="Specialization"
          value={specialization}
        />

        {/* Email */}
        <InfoItem
          icon={<Mail size={24} />}
          value={email}
          href={`mailto:${email}`}
        />

        {/* Phone */}
        <InfoItem
          icon={<Phone size={24} />}
          value={phone}
          href={`tel:${phone}`}
        />
      </div>
    </div>
  );
};

interface InfoItemProps {
  icon: ReactNode;
  label?: string;
  value: string;
  href?: string; // If provided, it renders as an <a> tag
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value, href }) => {
  const content = (
    <div className="flex flex-col">
      {label && (
        <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">
          {label}
        </span>
      )}
      <p
        className={`text-[1.05rem] leading-snug ${label ? "font-bold text-gray-800" : "font-medium text-gray-700"}`}
      >
        {value}
      </p>
    </div>
  );

  return (
    <div className="flex items-start gap-4">
      {/* Icon Wrapper */}
      <div className="mt-1 h-6 w-6 shrink-0 text-brand-secondary">{icon}</div>

      {/* Logic to render as a link or plain text */}
      {href ? (
        <a href={href} className="hover:text-[#99582a] transition-colors">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
};

export default ProfileCard;
