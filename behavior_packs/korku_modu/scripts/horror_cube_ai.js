// Korku Küpü AI Sistemi
// Siyah ve mor gözlü yardımcı küp, sorular soruyor, sonra Ender Man'e dönüşüp saldırıyor

const QUESTIONS = [
  "Senin adın ne? 👻",
  "Neden burada yalnız mısın? 😨",
  "Korkmaktan hoşlanır mısın? 💀",
  "Gece ne yapıyorsun? 🌙",
  "Bu dünyada ne kadar kaldın? ⏳",
  "En kötü hatırın ne? 😱",
  "Kaçmak ister misin? 🏃",
  "Beni tanıyor musun? 👁️"
];

const TRANSFORM_MESSAGES = [
  "Hahahaha... GÜÇ! 💥",
  "Artık farklıyım... 👿",
  "Seni bulmamı istemedin mi? 🔥",
  "ENDER MAN'E DÖNÜŞTÜM! 🌑",
  "Sonu geliyor... ⚫"
];

class HorrorCubeAI {
  constructor() {
    this.cubes = new Map();
    this.questions_asked = new Map();
    this.phase = new Map();
  }

  manageCubes() {
    setInterval(() => {
      try {
        // Tüm oyuncuları kontrol et
        const players = world.getAllPlayers();
        
        for (const player of players) {
          const cube = this.findNearestCube(player);
          
          if (cube) {
            const cubeId = cube.id;
            
            if (!this.phase.has(cubeId)) {
              this.phase.set(cubeId, "phase_1");
              this.questions_asked.set(cubeId, 0);
            }
            
            const currentPhase = this.phase.get(cubeId);
            
            if (currentPhase === "phase_1") {
              this.manageAssistantPhase(cube, player);
            } else if (currentPhase === "phase_2") {
              this.manageEndermanPhase(cube, player);
            }
          }
        }
      } catch (e) {
        console.warn("HorrorCubeAI Error:", e);
      }
    }, 1000);
  }

  manageAssistantPhase(cube, player) {
    const cubeId = cube.id;
    const distance = this.getDistance(cube, player);
    
    if (distance < 20) {
      const questionsAsked = this.questions_asked.get(cubeId) || 0;
      
      if (questionsAsked < 5) {
        if (Math.random() < 0.1) {
          const question = QUESTIONS[Math.floor(Math.random() * QUESTIONS.length)];
          player.sendMessage(`§c[Korku Küpü]: ${question}`);
          this.questions_asked.set(cubeId, questionsAsked + 1);
        }
      } else {
        this.transformToEnderman(cube, player);
      }
    }
  }

  manageEndermanPhase(cube, player) {
    const distance = this.getDistance(cube, player);
    
    if (distance < 30) {
      const messages = [
        "§4[Ender Man]: Seni buldum! 👿",
        "§4[Ender Man]: Kaçabilir misin? 🔥",
        "§4[Ender Man]: SONA GELDİN! ⚫"
      ];
      
      if (Math.random() < 0.05) {
        const message = messages[Math.floor(Math.random() * messages.length)];
        player.sendMessage(message);
      }
      
      if (Math.random() < 0.1) {
        try {
          player.applyDamage(2);
          player.sendMessage("§c[Sistem]: Ender Man tarafından saldırıya uğradın! 💥");
        } catch (e) {
          console.warn("Damage error:", e);
        }
      }
    }
  }

  transformToEnderman(cube, player) {
    const cubeId = cube.id;
    
    if (this.phase.get(cubeId) === "phase_1") {
      this.phase.set(cubeId, "phase_2");
      
      const message = TRANSFORM_MESSAGES[Math.floor(Math.random() * TRANSFORM_MESSAGES.length)];
      player.sendMessage(`§6${message}`);
      
      try {
        cube.triggerEvent("horror_cube:transform_to_enderman");
      } catch (e) {
        console.warn("Transform error:", e);
      }
    }
  }

  findNearestCube(player) {
    try {
      const entities = player.dimension.getEntities({
        type: "bayenderman:horror_cube"
      });
      
      let nearest = null;
      let minDistance = Infinity;
      
      for (const entity of entities) {
        const distance = this.getDistance(entity, player);
        if (distance < minDistance) {
          minDistance = distance;
          nearest = entity;
        }
      }
      
      return nearest;
    } catch (e) {
      return null;
    }
  }

  getDistance(entity1, entity2) {
    try {
      const pos1 = entity1.location;
      const pos2 = entity2.location;
      
      const dx = pos1.x - pos2.x;
      const dy = pos1.y - pos2.y;
      const dz = pos1.z - pos2.z;
      
      return Math.sqrt(dx * dx + dy * dy + dz * dz);
    } catch (e) {
      return Infinity;
    }
  }
}

// AI'yi başlat
const horrorCubeAI = new HorrorCubeAI();
horrorCubeAI.manageCubes();

console.log("[Korku Modu] Başlatıldı! Küpü çağırmak için: /summon bayenderman:horror_cube");
