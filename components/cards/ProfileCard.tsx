import React, { ReactNode } from "react";
import { GraduationCap, Mail, Phone, User } from "lucide-react";
import Image from "next/image";

// Define the shape of the props
interface ProfileCardProps {
  name: string;
  role: string;
  specialization?: string;
  email?: string;
  phone?: string;
  imgSrc?: string; // Optional image source for profile picture
  otherInfo?: string[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  role,
  specialization,
  email,
  phone,
  otherInfo,
  imgSrc,
}) => {
  return (
    <div className="group max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl hover:shadow-brand-secondary/30 duration-300 border border-gray-100">
      {/* Header Section */}
      <div
        className={`bg-brand-secondary px-4 py-6 flex flex-col items-center text-center`}
      >
        {/* Profile Icon/Avatar Container */}
        <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/20 overflow-hidden">
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt={name}
              width={100}
              height={100}
              className="rounded-full group-hover:scale-110 transition-all duration-300"
            />
          ) : (
            <User className="h-16 w-16 text-white" />
          )}
        </div>

        <h2 className="text-xl font-extrabold text-white uppercase">{name}</h2>
        <p className="text-md font-medium text-body-bg-alt">{role}</p>
      </div>

      {/* Details Section */}
      <div className="px-4 py-6 space-y-3">
        {/* Email */}
        {email && (
          <InfoItem
            icon={<Mail size={20} />}
            value={email}
            href={`mailto:${email}`}
          />
        )}

        {/* Phone */}
        {phone && (
          <InfoItem
            icon={<Phone size={20} />}
            value={phone}
            href={`tel:${phone}`}
          />
        )}

        {/* Specialization */}
        {specialization && (
          <InfoItem
            icon={<GraduationCap size={20} />}
            label="Expertise"
            value={specialization}
          />
        )}

        {otherInfo?.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
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
        <span className="text-xs font-semibold uppercase tracking-wide mb-1 text-gray-400">
          {label}
        </span>
      )}
      <p
        className={`text-md leading-snug transition-all duration-300 ease-in-out ${label ? "font-bold text-gray-800" : "font-medium text-gray-700"} ${href && "hover:text-brand-secondary"}`}
      >
        {value}
      </p>
    </div>
  );

  return (
    <div className="flex items-start gap-6">
      {/* Icon Wrapper */}
      <div className="mt-1 h-5 w-5 shrink-0 text-brand-secondary">{icon}</div>

      {/* Logic to render as a link or plain text */}
      {href ? <a href={href}>{content}</a> : content}
    </div>
  );
};

export default ProfileCard;
