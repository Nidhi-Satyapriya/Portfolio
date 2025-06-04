import { FaGithub, FaCode } from 'react-icons/fa';
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
    link: 'https://github.com/Nidhi-Satyapriya',
    icon: <FaGithub />,
  },
  {
    platform: 'LeetCode',
    link: 'https://leetcode.com/u/Nidhi_Satyapriya/',
    icon: <SiLeetcode />,
  },
  {
    platform: 'Codeforces',
    link: 'https://codeforces.com/profile/Satyapriya_Nidhi',
    imgSrc: '/cf.png', // should be inside /public directory
  },
  {
    platform: 'CodeChef',
    link: 'https://www.codechef.com/users/cast_bug_28',
    icon: <SiCodechef />,
  },
  {
    platform: 'GeeksforGeeks',
    link: 'https://www.geeksforgeeks.org/user/satyapriv8jt/',
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
  // Merge incoming profiles with the default ones
  const displayProfiles: CodingProfileItem[] =
    profiles && profiles.length > 0
      ? profiles.map((profile) => {
          const correct = defaultProfiles.find(
            (d) => d.platform === profile.platform
          );
          return {
            ...profile,
            link: correct?.link || profile.link,
            icon: correct?.icon || profile.icon,
            imgSrc: correct?.imgSrc || profile.imgSrc,
          };
        })
      : defaultProfiles;

  // Debug: log the final profile list
 // console.log('Final Display Profiles:', displayProfiles);

  if (loading) {
    return <div className="card bg-base-100 shadow p-4">Loading...</div>;
  }

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
