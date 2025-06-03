
import {
  FaGithub,
  FaCode,
} from 'react-icons/fa';
import {
  SiGeeksforgeeks,
  SiLeetcode,
  SiCodechef,
} from 'react-icons/si';

interface CodingProfileItem {
  platform: string;
  link: string;
  icon?: JSX.Element;
  imgSrc?: string;
}

const defaultProfiles: CodingProfileItem[] = [
  {
    platform: 'GitHub',
    link: 'https://github.com/your-username',
    icon: <FaGithub />,
  },
  {
    platform: 'LeetCode',
    link: 'https://leetcode.com/your-username',
    icon: <SiLeetcode />,
  },
  {
    platform: 'Codeforces',
    link: 'https://codeforces.com/profile/your-username',
    imgSrc: '/cf.png',
  },
  {
    platform: 'CodeChef',
    link: 'https://www.codechef.com/users/your-username',
    icon: <SiCodechef />,
  },
  {
    platform: 'GeeksforGeeks',
    link: 'https://auth.geeksforgeeks.org/user/your-username',
    icon: <SiGeeksforgeeks />,
  },
];

const CodingProfile = ({
  loading,
  profiles,
}: {
  loading: boolean;
  profiles: CodingProfileItem[] | undefined;
}) => {
  const displayProfiles = profiles && profiles.length > 0 ? profiles : defaultProfiles;

  if (loading) return <div className="card bg-base-100 shadow p-4">Loading...</div>;

  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="card-body">
        <div className="mx-3">
          <h5 className="card-title text-lg font-semibold text-base-content opacity-70 mb-3">
            Coding Profiles
          </h5>
        </div>
        <div className="text-base-content text-opacity-80">
          <ul className="space-y-5 mx-4">
            {displayProfiles.map(({ platform, link, icon, imgSrc }) => (
              <li key={platform} className="flex items-center space-x-4">
                <span className="text-2xl text-primary">
                  {icon ? (
                    icon
                  ) : imgSrc ? (
                    <img
                      src={imgSrc}
                      alt={`${platform} icon`}
                      width={24}
                      height={24}
                      className="rounded"
                    />
                  ) : (
                    <FaCode />
                  )}
                </span>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium hover:underline"
                >
                  {platform}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CodingProfile;
