'use client'
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
  } from "@/components/ui/input-otp";
import { useState } from "react";
import { useRouter } from "next/navigation";

const PasskeyModal = () => {
    const router = useRouter();
    const [open, setOpen] = useState(true)
    const [passkey, setPasskey] = useState('')
    const closeModal = () => {
        setOpen(false);
        router.push('/')
    }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="shad-alert-dialog">
        <DialogHeader>
          <DialogTitle className="flex items-start justify-between">Admin Access Verification
            <Image
              src="/assets/icons/close.svg"
              alt="close"
              width={20}
              height={20}
              onClick={() => closeModal()}
              className="cursor-pointer"
            />
          </DialogTitle>
          <DialogDescription>
          To access the admin page, please enter the passkey.
          </DialogDescription>
        </DialogHeader>
        <div>
          <InputOTP
            maxLength={6}
            value={passkey}
            onChange={(value) => setPasskey(value)}
          >
            <InputOTPGroup className="shad-otp">
              <InputOTPSlot className="shad-otp-slot" index={0} />
              <InputOTPSlot className="shad-otp-slot" index={1} />
              <InputOTPSlot className="shad-otp-slot" index={2} />
              <InputOTPSlot className="shad-otp-slot" index={3} />
              <InputOTPSlot className="shad-otp-slot" index={4} />
              <InputOTPSlot className="shad-otp-slot" index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PasskeyModal;
