const musicsSample = [
  {
    id: 1,
    title: 'Coverless Book',
    author: 'Amir Firouzfard',
    signature:
      'Music by <a href="https://pixabay.com/users/ambientaudiovision-25188255/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=186307">Amir Firouzfard</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=186307">Pixabay</a>',
    audioLink: 'assets/audios/forest-tales-background-orchestral-music-for-video-stories-short-401044.mp3',
    artLink: 'assets/images/placeholder.webp',
  },
  {
    id: 2,
    title: 'Lofi Orchestra',
    author: 'Patrick A',
    signature:
      'Music by <a href="https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=162306">Patrick A.</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=162306">Pixabay</a>',
    audioLink: 'assets/audios/into-the-abyss-piano-soft-dark-ambient-314429.mp3',
    artLink: 'assets/images/placeholder.webp',
  },
  {
    id: 3,
    title: 'For a Dream',
    author: 'Patrick A',
    signature:
      'Music by <a href="https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=216038">Patrick A.</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=216038">Pixabay</a>',
    audioLink: 'assets/audios/solo-link-soft-dark-ambient-vocal-314431.mp3',
    artLink: 'assets/images/placeholder.webp',
  },
  {
    id: 4,
    title: 'Good Night',
    author: 'FASSound',
    signature:
      'Music by <a href="https://pixabay.com/users/fassounds-3433550/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160166">FASSounds</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=160166">Pixabay</a>',
    audioLink: 'assets/audios/awakening-the-soul-ambient-184110.mp3',
    artLink: 'assets/images/placeholder.webp',
  },
  {
    id: 5,
    title: 'Summer Rain',
    author: 'Patrick A',
    signature:
      'Music by <a href="https://pixabay.com/users/xethrocc-12734491/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=216038">Patrick A.</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=216038">Pixabay</a>',
    audioLink: 'assets/audios/dreamscape-ambient-184106.mp3',
    artLink: 'assets/images/placeholder.webp',
  },
  {
    id: 6,
    title: 'Lofi Study',
    author: 'FASSound',
    signature:
      'Music by <a href="https://pixabay.com/users/fassounds-3433550/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=112191">FASSounds</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=112191">Pixabay</a>',
    audioLink: 'assets/audios/dreamscape-ambient-184106.mp3',
    artLink: 'assets/images/placeholder.webp',
  },
];

export function getAllMusics() {
  return [...musicsSample];
}

export function generateMusicItemUsingTemplate({ id, artLink, title, signature, audioLink }) {
  const musicItemTemplate = document.getElementById('musicitemtemplate');

  const element = musicItemTemplate.content.cloneNode(true);

  const article = element.querySelector('[data-musicid]');
  article.setAttribute('data-musicid', id);

  const musicImage = element.getElementById('musicImage');
  musicImage.src = artLink;
  musicImage.alt = title;

  const musicTitle = element.getElementById('musicTitle');
  musicTitle.textContent = title;

  const musicSignature = element.getElementById('musicSignature');
  musicSignature.innerHTML = signature;

  const musicAudio = element.getElementById('musicAudio');
  musicAudio.src = audioLink;

  return element;
}

export function generateMusicItemUsingInnerHTML({ id, artLink, title, signature, audioLink }) {
  return `
    <article class="music-list__item" data-musicid="${id}">
      <div class="card">
        <div class="card-image">
          <img id="musicImage" src="${artLink}" alt="${title}" />
        </div>
        <div class="card-body">
          <h3 id="musicTitle" class="card-body__title">${title}</h3>
          <div id="musicSignature" class="card-body__copyright">${signature}</div>
          <audio
            id="musicAudio"
            class="music-list__item__audio"
            controls
            src="${audioLink}"
            type="audio/mp3"
            preload="none"
          ></audio>
        </div>
      </div>
    </article>
  `;
}
