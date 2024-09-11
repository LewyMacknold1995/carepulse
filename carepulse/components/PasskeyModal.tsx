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
import { useState } from "react";
import { useRouter } from "next/navigation";

const PasskeyModal = () => {
    const router = useRouter();
    const [open, setOpen] = useState(true)
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
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PasskeyModal;
