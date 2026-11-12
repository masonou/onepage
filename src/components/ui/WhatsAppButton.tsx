import { Button } from "./Button";
import { WhatsAppIcon } from "./WhatsAppIcon";

type WhatsAppButtonProps = {
  label: string;
  message: string;
};

const whatsappNumber = "35799194313";

export function WhatsAppButton({ label, message }: WhatsAppButtonProps) {
  const href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button href={href} className="w-full px-6 py-4 text-base sm:w-auto">
      <WhatsAppIcon className="mr-2 size-5 shrink-0" />
      <span>{label}</span>
    </Button>
  );
}
