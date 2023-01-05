import { gql } from '@apollo/client';

export const LAUNCHES_PAST_FRAGMENT = gql`
  fragment LaunchesPastFragment on Launch {
    id
    details
    mission_name
    launch_date_utc
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
      flickr_images
    }
    rocket {
      rocket_name
    }
  }
`;
