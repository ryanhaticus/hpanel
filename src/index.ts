// Import Axios for REST Requests
import axios, { AxiosInstance } from 'axios';

// Required credentials for CPanel API authorization.
interface Authorization {
  username: string;
  token: string;
  cpanelUri: string;
}

interface Instance {
  axios: AxiosInstance;
}

// Axios instance decleration.
export let instance: Instance = {
  axios
};

// Authenticate the user via. a default function ran from importing the module.
export default (authorization: Authorization) => {
  instance.axios = axios.create({
    baseURL: authorization.cpanelUri.endsWith('/')
      ? `${authorization.cpanelUri}execute/`
      : `${authorization.cpanelUri}/execute/`,
    headers: {
      Authorization: `cpanel ${authorization.username}:${authorization.token}`
    }
  });
};

// Export modules.
export * as Backup from './modules/Backup';
export * as Bandwith from './modules/Bandwidth';
export * as Batch from './modules/Batch';
export * as BlockIP from './modules/BlockIP';
export * as BoxTrapper from './modules/BoxTrapper';
export * as Brand from './modules/Brand';
export * as Branding from './modules/Branding';
export * as CacheBuster from './modules/CacheBuster';
export * as CCS from './modules/CCS';
export * as Chkservd from './modules/Chkservd';
export * as Chrome from './modules/Chrome';
export * as Contactus from './modules/Contactus';
export * as cPAddons from './modules/cPAddons';
export * as cPGreyList from './modules/cPGreyList';
export * as DAV from './modules/DAV';
export * as DCV from './modules/DCV';
export * as DirectoryIndexes from './modules/DirectoryIndexes';
export * as DirectoryPrivacy from './modules/DirectoryPrivacy';
export * as DirectoryProtection from './modules/DirectoryProtection';
export * as DNS from './modules/DNS';
export * as DNSSEC from './modules/DNSSEC';
export * as DomainInfo from './modules/DomainInfo';
export * as DynamicDNS from './modules/DynamicDNS';
export * as EA4 from './modules/EA4';
export * as Email from './modules/Email';
export * as EmailAuth from './modules/EmailAuth';
export * as ExternalAuthentication from './modules/ExternalAuthentication';
export * as Fileman from './modules/Fileman';
export * as Ftp from './modules/Ftp';
export * as GPG from './modules/GPG';
export * as ImageManager from './modules/ImageManager';
export * as Integration from './modules/Integration';
export * as KnownHosts from './modules/KnownHosts';
export * as LangPHP from './modules/LangPHP';
export * as LastLogin from './modules/LastLogin';
export * as Locale from './modules/Locale';
export * as LogManager from './modules/LogManager';
export * as Mailboxes from './modules/Mailboxes';
export * as Market from './modules/Market';
export * as Mime from './modules/Mime';
export * as ModSecurity from './modules/ModSecurity';
export * as Mysql from './modules/Mysql';
export * as Notifications from './modules/Notifications';
export * as NVData from './modules/NVData';
export * as Parser from './modules/Parser';
export * as PassengerApps from './modules/PassengerApps';
export * as PasswdStrength from './modules/PasswdStrength';
export * as Personalization from './modules/Personalization';
export * as Postgresql from './modules/Postgresql';
export * as Pushbullet from './modules/Pushbullet';
export * as Quota from './modules/Quota';
export * as Resellers from './modules/Resellers';
export * as ResourceUsage from './modules/ResourceUsage';
export * as Restore from './modules/Restore';
export * as ServerInformation from './modules/ServerInformation';
export * as Session from './modules/Session';
export * as SiteTemplates from './modules/SiteTemplates';
export * as SpamAssassin from './modules/SpamAssassin';
export * as SSH from './modules/SSH';
export * as SSL from './modules/SSL';
export * as Stats from './modules/Stats';
export * as StatsBar from './modules/StatsBar';
export * as StatsManager from './modules/StatsManager';
export * as Styles from './modules/Styles';
export * as SubDomain from './modules/SubDomain';
export * as Themes from './modules/Themes';
export * as Tokens from './modules/Tokens';
export * as TwoFactorAuth from './modules/TwoFactorAuth';
export * as UserManager from './modules/UserManager';
export * as UserTasks from './modules/UserTasks';
export * as Variables from './modules/Variables';
export * as VersionControl from './modules/VersionControl';
export * as VersionControlDeployment from './modules/VersionControlDeployment';
export * as WebDisk from './modules/WebDisk';
export * as WebmailApps from './modules/WebmailApps';
export * as WebVhosts from './modules/WebVhosts';
export * as WordPressBackup from './modules/WordPressBackup';
export * as WordPressInstanceManager from './modules/WordPressInstanceManager';
export * as WordPressRestore from './modules/WordPressRestore';
