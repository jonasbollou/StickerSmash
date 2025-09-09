import { Requerant } from '../../dto/requerant';

const API_BASE_URL = 'http://v2.solidarite.local/umbraco/Surface'; // replace with your Umbraco base URL

export async function getContent(): Promise<Requerant> {
  try {
    const response = await fetch(`${API_BASE_URL}/Enroll/GetUnpublishedParticipantSearchData/1_`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return new Requerant(data);

  } catch (error) {
    console.error('Error fetching Umbraco content:', error);
    throw error;
  }
}