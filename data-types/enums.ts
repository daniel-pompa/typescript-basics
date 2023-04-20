(() => {
  enum AudioLevel {
    min = 1,
    medium = 5,
    max = 10,
  }

  let currentAudioLevel: AudioLevel = AudioLevel.medium;

  console.log(AudioLevel);
  console.log(currentAudioLevel);
})();
