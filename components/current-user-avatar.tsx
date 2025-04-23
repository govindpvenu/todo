"use client";

import { useCurrentUserImage } from "@/hooks/use-current-user-image";
import { useCurrentUserName } from "@/hooks/use-current-user-name";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

export const CurrentUserAvatar = () => {
  const profileImage = useCurrentUserImage();
  const name = useCurrentUserName();
  const initials = name
    ?.split(" ")
    ?.map((word) => word[0])
    ?.join("")
    ?.toUpperCase();

  return (
    <Button
      variant="outline"
      className="rounded-full cursor-pointer hover:scale-105 transition-transform duration-500"
      size="icon"
    >
      <Avatar>
        {profileImage && <AvatarImage src={profileImage} alt={initials} />}
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
    </Button>
  );
};
