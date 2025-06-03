import {
  FaGithub,
  FaCode,
  FaCodepen,
  FaStackOverflow,
} from 'react-icons/fa';
import {
  SiGeeksforgeeks,
  SiLeetcode,
  SiCodechef,
} from 'react-icons/si'; // from react-icons

interface CodingProfileItem {
  platform: string;
  link: string;
  icon: JSX.Element;
}

const iconMap: Record<string, JSX.Element> = {
  GitHub: <FaGithub />,
  Codeforces: <FaCode />,
  CodePen: <FaCodepen />,
  'Stack Overflow': <FaStackOverflow />,
  GeeksforGeeks: <SiGeeksforgeeks />,
  LeetCode: <SiLeetcode />,
  CodeChef: <SiCodechef />,
  Codolio: <FaCode />, // No official icon, use fallback
};

const defaultProfiles: CodingProfileItem[] = [
  {
    platform: 'GitHub',
    link: 'https://github.com/your-username',
    icon: iconMap['GitHub'],
  },
  {
    platform: 'LeetCode',
    link: 'https://leetcode.com/your-username',
    icon: iconMap['LeetCode'],
  },
  {
    platform: 'Codeforces',
    link: 'https://codeforces.com/profile/your-username',
    icon: iconMap['Codeforces'],
  },
  {
    platform: 'CodePen',
    link: 'https://codepen.io/your-username',
    icon: iconMap['CodePen'],
  },
  {
    platform: 'Stack Overflow',
    link: 'https://stackoverflow.com/users/your-user-id',
    icon: iconMap['Stack Overflow'],
  },
  {
    platform: 'CodeChef',
    link: 'https://www.codechef.com/users/your-username',
    icon: iconMap['CodeChef'],
  },
  {
    platform: 'GeeksforGeeks',
    link: 'https://auth.geeksforgeeks.org/user/your-username',
    icon: iconMap['GeeksforGeeks'],
  },
  {
    platform: 'Codolio',
    link: 'https://codolio.io/your-username',
    icon: iconMap['Codolio'],
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
            {displayProfiles.map(({ platform, link, icon }) => (
              <li key={platform} className="flex items-center space-x-4">
                <span className="text-2xl text-primary">{icon}</span>
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
