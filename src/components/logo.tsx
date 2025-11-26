import Image from 'next/image';

export function Logo() {
  return (
    <Image 
      src="https://i.ibb.co/46FdcLw/Sign-AILogo-2.png" 
      alt="SignAI Logo" 
      width={120} 
      height={30} 
      priority
    />
  );
}
