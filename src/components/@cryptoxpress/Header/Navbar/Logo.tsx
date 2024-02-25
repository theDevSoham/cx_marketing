import Link from "next/link";
const Logo = () => {
    return (
        <div className="logo">
            <Link href="/">
                <img
                    src="/assets/images/logos/cryptoxpress/2x/icon.png"
                    alt="logo"
                    width={65}
                />
            </Link>
        </div>
    );
};

export default Logo;
