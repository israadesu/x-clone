import { useRouter } from "next/router";
import useUser from "@/hooks/useUser";
import { useCallback } from "react";
import Image from "next/image";

interface ProfilepicProps {
  userId: string;
  isLarge?: boolean;
  hasBorder?: boolean;
}

const Profilepic: React.FC<ProfilepicProps> = (
  { userId,
    isLarge,
    hasBorder }
) => {


  const { data: fetchUser } = useUser(userId);
  const router = useRouter();
  const onClick = useCallback((event: any) => {
    event.stopPropagation();

    const url = `/users/${userId}`;

    router.push(url);
  }, [router, userId]);
  return (
    <div className=
      {`
          ${hasBorder ? 'border-4 border-black' : ''}
          ${isLarge ? 'h-32' : 'h-12'}
          ${isLarge ? 'w-32' : 'w-12'}
          rouded-full
          hover:opacity-90
          transition
          cursor-pointer
          relative
        `}>

      <Image fill style={{ objectFit: 'cover', borderRadius: '100%' }}
        alt="avatar"
        onClick={onClick}
        src={fetchUser?.ProfileImage || '/images/default.png'}

      />

    </div>
  );
}

export default Profilepic;