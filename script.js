let questions = [
    "Do you enjoy taking control in intimate situations?",
    "Do you like being restrained during sex?",
    "Are you interested in role-playing scenarios?",
    "Do you find pleasure in being punished by your partner?",
    "Do you enjoy giving orders to your partner?",
    "Are you interested in being spanked?",
    "Do you like to experiment with different power dynamics?",
    "Do you enjoy being humiliated during sex?",
    "Are you comfortable with pain as a form of pleasure?",
    "Do you enjoy degrading your partner?",
    "Do you like to use blindfolds or other sensory deprivation tools?",
    "Are you interested in bondage?",
    "Do you enjoy being tied up?",
    "Do you like to tie up your partner?",
    "Are you interested in using sex toys?",
    "Do you enjoy wearing or having your partner wear fetish clothing?",
    "Do you enjoy being dominated?",
    "Do you like to dominate your partner?",
    "Are you interested in using gags?",
    "Do you enjoy breath control play?",
    "Do you find pleasure in inflicting pain on your partner?",
    "Do you like to be marked (e.g., with bruises, scratches)?",
    "Are you interested in pet play?",
    "Do you enjoy role-playing as an animal?",
    "Do you like to role-play as a caregiver or a child?",
    "Are you interested in medical play?",
    "Do you enjoy being a voyeur?",
    "Do you like to be watched during intimate moments?",
    "Are you interested in group sex?",
    "Do you enjoy public play or exhibitionism?",
    "Do you like to be called degrading names during sex?",
    "Do you enjoy calling your partner degrading names?",
    "Are you interested in age play?",
    "Do you like to role-play as an authority figure?",
    "Do you enjoy being a submissive?",
    "Do you like to be in a dominant role?",
    "Are you interested in service submission (serving your partner)?",
    "Do you enjoy receiving service from your partner?",
    "Are you comfortable with consensual non-consent scenarios?",
    "Do you enjoy chastity play?",
    "Are you interested in cuckolding?",
    "Do you like to experience sensory overload?",
    "Do you enjoy sensation play (e.g., hot wax, ice)?",
    "Are you interested in primal play?",
    "Do you enjoy wrestling or roughhousing with your partner?",
    "Do you like to experience fear as a part of play?",
    "Are you interested in consensual slavery?",
    "Do you enjoy being in complete control of your partner?",
    "Do you like to give up all control to your partner?",
    "Are you comfortable with blood play?",
    "Do you enjoy being disciplined?",
    "Do you like to discipline your partner?",
    "Are you interested in orgasm control or denial?",
    "Do you enjoy being a brat to provoke a reaction?",
    "Do you like to tame or discipline brats?",
    "Are you interested in consensual non-monogamy?",
    "Do you enjoy primal play (e.g., wrestling, biting)?",
    "Do you like to be prey in primal play?",
    "Do you enjoy being a primal hunter?",
    "Are you interested in consensual master/slave relationships?",
    "Do you like to experiment with different kinks?",
    "Do you enjoy watching others in intimate situations?",
    "Do you like to be watched by others during intimate moments?",
    "Are you interested in using restraints?",
    "Do you enjoy giving or receiving impact play (e.g., spanking, paddling)?",
    "Do you like to be praised and called endearing names during sex?",
    "Do you enjoy calling your partner endearing names?",
    "Are you interested in being in control of your partner's orgasm?",
    "Do you enjoy having your partner control your orgasm?",
    "Do you like to experience role reversals in power dynamics?",
    "Are you comfortable with pain as a part of sexual pleasure?",
    "Do you enjoy being an owner in a pet play scenario?",
    "Do you like to be a pet in a pet play scenario?",
    "Are you interested in mind control play?",
    "Do you enjoy being restrained and immobilized?",
];
 
let currentQuestionIndex = 0;
let totalQuestionsToShow = questions.length;
let answers = [];
let types = [
    "Vanilla", "Dominant", "Submissive", "Master/Mistress", "Switch",
    "Experimentalist", "Pet", "Masochist", "Rigger", "Owner",
    "Exhibitionist", "Daddy/Mommy", "Non-monogamist", "Primal (Hunter)",
    "Slave", "Rope bunny", "Boy/Girl", "Degrader", "Sadist", "Degradee",
    "Primal (Prey)", "Brat tamer", "Ageplayer", "Voyeur", "Brat"
];
 
let typePercentages = {
    "Vanilla": 0,
    "Dominant": 0,
    "Submissive": 0,
    "Master/Mistress": 0,
    "Switch": 0,
    "Experimentalist": 0,
    "Pet": 0,
    "Masochist": 0,
    "Rigger": 0,
    "Owner": 0,
    "Exhibitionist": 0,
    "Daddy/Mommy": 0,
    "Non-monogamist": 0,
    "Primal (Hunter)": 0,
    "Slave": 0,
    "Rope bunny": 0,
    "Boy/Girl": 0,
    "Degrader": 0,
    "Sadist": 0,
    "Degradee": 0,
    "Primal (Prey)": 0,
    "Brat tamer": 0,
    "Ageplayer": 0,
    "Voyeur": 0,
    "Brat": 0
};
 
const typeAppearances = {
    "Vanilla": 75,
    "Dominant": 29,
    "Submissive": 36,
    "Master/Mistress": 18,
    "Switch": 32,
    "Experimentalist": 30,
    "Pet": 5,
    "Masochist": 20,
    "Rigger": 3,
    "Owner": 13,
    "Exhibitionist": 9,
    "Daddy/Mommy": 5,
    "Non-monogamist": 8,
    "Primal (Hunter)": 15,
    "Slave": 20,
    "Rope bunny": 24,
    "Boy/Girl": 8,
    "Degrader": 5,
    "Sadist": 21,
    "Degradee": 4,
    "Primal (Prey)": 18,
    "Brat tamer": 1,
    "Ageplayer": 2,
    "Voyeur": 8,
    "Brat": 1
};
 
let typeMaxPoints = {
    "Vanilla": 1500, // Pontuação máxima para a categoria Vanilla
    "Dominant": 2360, // Pontuação máxima para a categoria Dominant
    "Submissive": 3030, // Pontuação máxima para a categoria Submissive
    "Master/Mistress": 1590, // Pontuação máxima para a categoria Master/Mistress
    "Switch": 2220, // Pontuação máxima para a categoria Switch
    "Experimentalist": 2580, // Pontuação máxima para a categoria Experimentalist
    "Pet": 460, // Pontuação máxima para a categoria Pet
    "Masochist": 1610, // Pontuação máxima para a categoria Masochist
    "Rigger": 300, // Pontuação máxima para a categoria Rigger
    "Owner": 1000, // Pontuação máxima para a categoria Owner
    "Exhibitionist": 700, // Pontuação máxima para a categoria Exhibitionist
    "Daddy/Mommy": 470, // Pontuação máxima para a categoria Daddy/Mommy
    "Non-monogamist": 700, // Pontuação máxima para a categoria Non-monogamist
    "Primal (Hunter)": 1100, // Pontuação máxima para a categoria Primal (Hunter)
    "Slave": 1660, // Pontuação máxima para a categoria Slave
    "Rope bunny": 1830, // Pontuação máxima para a categoria Rope bunny
    "Boy/Girl": 680, // Pontuação máxima para a categoria Boy/Girl
    "Degrader": 430, // Pontuação máxima para a categoria Degrader
    "Sadist": 1630, // Pontuação máxima para a categoria Sadist
    "Degradee": 340, // Pontuação máxima para a categoria Degradee
    "Primal (Prey)": 1340, // Pontuação máxima para a categoria Primal (Prey)
    "Brat tamer": 100, // Pontuação máxima para a categoria Brat tamer
    "Ageplayer": 180, // Pontuação máxima para a categoria Ageplayer
    "Voyeur": 780, // Pontuação máxima para a categoria Voyeur
    "Brat": 100, // Pontuação máxima para a categoria Brat
};
 
let questionTypeMappings = [
    {
        question: "Do you enjoy taking control in intimate situations?",
        types: {
            "Dominant": 100,
            "Master/Mistress": 80,
            "Owner": 70,
            "Sadist": 60,
            "Primal (Hunter)": 50,
            "Vanilla": 20
        }
    },
    {
        question: "Do you like being restrained during sex?",
        types: {
            "Submissive": 100,
            "Rope bunny": 90,
            "Masochist": 80,
            "Slave": 70,
            "Primal (Prey)": 60,
            "Vanilla": 20
        }
    },
    {
        question: "Are you interested in role-playing scenarios?",
        types: {
            "Switch": 100,
            "Experimentalist": 80,
            "Pet": 70,
            "Boy/Girl": 60,
            "Primal (Hunter)": 50,
            "Vanilla": 20
        }
    },
    {
        question: "Do you find pleasure in being punished by your partner?",
        types: {
            "Masochist": 100,
            "Submissive": 90,
            "Slave": 80,
            "Degradee": 70,
            "Rope bunny": 60,
            "Vanilla": 20
        }
    },
    {
        question: "Do you enjoy giving orders to your partner?",
        types: {
            "Dominant": 100,
            "Master/Mistress": 90,
            "Degrader": 80,
            "Owner": 70,
            "Primal (Hunter)": 60,
            "Vanilla": 20
        }
    },
    {
        question: "Are you interested in being spanked?",
        types: {
            "Masochist": 100,
            "Submissive": 90,
            "Slave": 80,
            "Degradee": 70,
            "Rope bunny": 60,
            "Vanilla": 20
        }
    },
    {
        question: "Do you like to experiment with different power dynamics?",
        types: {
            "Switch": 100,
            "Experimentalist": 80,
            "Primal (Hunter)": 70,
            "Primal (Prey)": 60,
            "Vanilla": 20
        }
    },
    {
        question: "Do you enjoy being humiliated during sex?",
        types: {
            "Degradee": 100,
            "Submissive": 90,
            "Slave": 80,
            "Masochist": 70,
            "Rope bunny": 60,
            "Vanilla": 20
        }
    },
    {
        question: "Are you comfortable with pain as a form of pleasure?",
        types: {
            "Masochist": 100,
            "Sadist": 90,
            "Submissive": 80,
            "Dominant": 70,
            "Experimentalist": 60,
            "Vanilla": 20
        }
    },
    {
        question: "Do you enjoy degrading your partner?",
        types: {
            "Degrader": 100,
            "Dominant": 90,
            "Master/Mistress": 80,
            "Sadist": 70,
            "Owner": 60,
            "Vanilla": 20
        }
    },
    {
        question: "Do you like to use blindfolds or other sensory deprivation tools?",
        types: {
            "Experimentalist": 100,
            "Dominant": 80,
            "Submissive": 70,
            "Switch": 60,
            "Vanilla": 20
        }
    },
    {
        question: "Are you interested in bondage?",
        types: {
            "Rigger": 100,
            "Rope bunny": 90,
            "Submissive": 80,
            "Dominant": 70,
            "Switch": 60,
            "Vanilla": 20
        }
    },
    {
        question: "Do you enjoy being tied up?",
        types: {
            "Rope bunny": 100,
            "Submissive": 90,
            "Masochist": 80,
            "Slave": 70,
            "Primal (Prey)": 60,
            "Vanilla": 20
        }
    },
    {
        question: "Do you like to tie up your partner?",
        types: {
            "Rigger": 100,
            "Dominant": 90,
            "Master/Mistress": 80,
            "Sadist": 70,
            "Switch": 60,
            "Vanilla": 20
        }
    },
    {
        question: "Are you interested in using sex toys?",
        types: {
            "Experimentalist": 100,
            "Switch": 80,
            "Submissive": 70,
            "Dominant": 60,
            "Vanilla": 20
        }
    },
    {
        question: "Do you enjoy wearing or having your partner wear fetish clothing?",
        types: {
            "Experimentalist": 100,
            "Pet": 90,
            "Boy/Girl": 80,
            "Switch": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Do you enjoy being dominated?",
        types: {
            "Submissive": 100,
            "Slave": 90,
            "Rope bunny": 80,
            "Primal (Prey)": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Do you like to dominate your partner?",
        types: {
            "Dominant": 100,
            "Master/Mistress": 90,
            "Owner": 80,
            "Sadist": 70,
            "Primal (Hunter)": 60,
            "Vanilla": 20
        }
    },
    {
        question: "Are you interested in using gags?",
        types: {
            "Experimentalist": 100,
            "Submissive": 90,
            "Rope bunny": 80,
            "Switch": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Do you enjoy breath control play?",
        types: {
            "Experimentalist": 100,
            "Masochist": 90,
            "Sadist": 80,
            "Switch": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Do you find pleasure in inflicting pain on your partner?",
        types: {
            "Sadist": 100,
            "Dominant": 90,
            "Master/Mistress": 80,
            "Degrader": 70,
            "Owner": 60,
            "Vanilla": 20
        }
    },
    {
        question: "Do you like to be marked (e.g., with bruises, scratches)?",
        types: {
            "Masochist": 100,
            "Submissive": 90,
            "Slave": 80,
            "Primal (Prey)": 70,
            "Rope bunny": 60,
            "Vanilla": 20
        }
    },
    {
        question: "Are you interested in pet play?",
        types: {
            "Pet": 100,
            "Boy/Girl": 90,
            "Experimentalist": 80,
            "Switch": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Do you enjoy role-playing as an animal?",
        types: {
            "Pet": 100,
            "Boy/Girl": 90,
            "Experimentalist": 80,
            "Switch": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Do you like to role-play as a caregiver or a child?",
        types: {
            "Daddy/Mommy": 100,
            "Boy/Girl": 90,
            "Ageplayer": 80,
            "Switch": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Are you interested in medical play?",
        types: {
            "Experimentalist": 100,
            "Masochist": 90,
            "Sadist": 80,
            "Switch": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Do you enjoy being a voyeur?",
        types: {
            "Voyeur": 100,
            "Exhibitionist": 90,
            "Non-monogamist": 80,
            "Switch": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Do you like to be watched during intimate moments?",
        types: {
            "Exhibitionist": 100,
            "Voyeur": 90,
            "Non-monogamist": 80,
            "Switch": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Are you interested in group sex?",
        types: {
            "Non-monogamist": 100,
            "Experimentalist": 90,
            "Voyeur": 80,
            "Exhibitionist": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Do you enjoy public play or exhibitionism?",
        types: {
            "Exhibitionist": 100,
            "Voyeur": 90,
            "Non-monogamist": 80,
            "Experimentalist": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Do you like to be called degrading names during sex?",
        types: {
            "Degradee": 100,
            "Submissive": 90,
            "Slave": 80,
            "Rope bunny": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Do you enjoy calling your partner degrading names?",
        types: {
            "Degrader": 100,
            "Dominant": 90,
            "Master/Mistress": 80,
            "Sadist": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Are you interested in age play?",
        types: {
            "Ageplayer": 100,
            "Boy/Girl": 90,
            "Daddy/Mommy": 80,
            "Switch": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Do you like to role-play as an authority figure?",
        types: {
            "Daddy/Mommy": 100,
            "Master/Mistress": 90,
            "Dominant": 80,
            "Sadist": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Do you enjoy being a submissive?",
        types: {
            "Submissive": 100,
            "Slave": 90,
            "Rope bunny": 80,
            "Primal (Prey)": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Do you like to be in a dominant role?",
        types: {
            "Dominant": 100,
            "Master/Mistress": 90,
            "Owner": 80,
            "Sadist": 70,
            "Primal (Hunter)": 60,
            "Vanilla": 20
        }
    },
    {
        question: "Are you interested in service submission (serving your partner)?",
        types: {
            "Slave": 100,
            "Submissive": 90,
            "Rope bunny": 80,
            "Primal (Prey)": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Do you enjoy receiving service from your partner?",
        types: {
            "Master/Mistress": 100,
            "Owner": 90,
            "Dominant": 80,
            "Primal (Hunter)": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Are you comfortable with consensual non-consent scenarios?",
        types: {
            "Experimentalist": 100,
            "Submissive": 90,
            "Slave": 80,
            "Rope bunny": 70,
            "Masochist": 60,
            "Vanilla": 20
        }
    },
    {
        question: "Do you enjoy chastity play?",
        types: {
            "Experimentalist": 100,
            "Submissive": 90,
            "Slave": 80,
            "Rope bunny": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Are you interested in cuckolding?",
        types: {
            "Non-monogamist": 100,
            "Voyeur": 90,
            "Experimentalist": 80,
            "Exhibitionist": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Do you like to experience sensory overload?",
        types: {
            "Experimentalist": 100,
            "Switch": 90,
            "Submissive": 80,
            "Dominant": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Do you enjoy sensation play (e.g., hot wax, ice)?",
        types: {
            "Experimentalist": 100,
            "Masochist": 90,
            "Sadist": 80,
            "Switch": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Are you interested in primal play?",
        types: {
            "Primal (Hunter)": 100,
            "Primal (Prey)": 90,
            "Experimentalist": 80,
            "Switch": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Do you enjoy wrestling or roughhousing with your partner?",
        types: {
            "Primal (Hunter)": 100,
            "Primal (Prey)": 90,
            "Sadist": 80,
            "Masochist": 70,
            "Switch": 60,
            "Vanilla": 20
        }
    },
    {
        question: "Do you like to experience fear as a part of play?",
        types: {
            "Masochist": 100,
            "Primal (Prey)": 90,
            "Submissive": 80,
            "Rope bunny": 70,
            "Experimentalist": 60,
            "Vanilla": 20
        }
    },
    {
        question: "Are you interested in consensual slavery?",
        types: {
            "Slave": 100,
            "Submissive": 90,
            "Rope bunny": 80,
            "Primal (Prey)": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Do you enjoy being in complete control of your partner?",
        types: {
            "Owner": 100,
            "Dominant": 90,
            "Master/Mistress": 80,
            "Sadist": 70,
            "Primal (Hunter)": 60,
            "Vanilla": 20
        }
    },
    {
        question: "Do you like to give up all control to your partner?",
        types: {
            "Submissive": 100,
            "Slave": 90,
            "Rope bunny": 80,
            "Primal (Prey)": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Are you comfortable with blood play?",
        types: {
            "Experimentalist": 100,
            "Sadist": 90,
            "Masochist": 80,
            "Switch": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Do you enjoy being disciplined?",
        types: {
            "Submissive": 100,
            "Slave": 90,
            "Rope bunny": 80,
            "Primal (Prey)": 70,
            "Vanilla": 20
        }
    },
    {
        question: "Do you like to discipline your partner?",
        types: {
            "Dominant": 100,
            "Master/Mistress": 90,
            "Degrader": 80,
            "Owner": 70,
            "Sadist": 60,
            "Vanilla": 20
        }
    },
    {
    question: "Are you interested in orgasm control or denial?",
    types: {
        "Experimentalist": 100,
        "Submissive": 90,
        "Slave": 80,
        "Rope bunny": 70,
        "Masochist": 60,
        "Vanilla": 20
    }
    },
    {
    question: "Do you enjoy being a brat to provoke a reaction?",
    types: {
        "Brat": 100,
        "Submissive": 90,
        "Switch": 80,
        "Vanilla": 20
    }
    },
    {
    question: "Do you like to tame or discipline brats?",
    types: {
        "Brat tamer": 100,
        "Dominant": 90,
        "Master/Mistress": 80,
        "Owner": 70,
        "Sadist": 60,
        "Vanilla": 20
    }
    },
    {
    question: "Are you interested in consensual non-monogamy?",
    types: {
        "Non-monogamist": 100,
        "Voyeur": 90,
        "Exhibitionist": 80,
        "Experimentalist": 70,
        "Vanilla": 20
    }
    },
    {
    question: "Do you enjoy primal play (e.g., wrestling, biting)?",
    types: {
        "Primal (Hunter)": 100,
        "Primal (Prey)": 90,
        "Sadist": 80,
        "Masochist": 70,
        "Switch": 60,
        "Vanilla": 20
    }
    },
    {
    question: "Do you like to be prey in primal play?",
    types: {
        "Primal (Prey)": 100,
        "Masochist": 90,
        "Submissive": 80,
        "Rope bunny": 70,
        "Experimentalist": 60,
        "Vanilla": 20
    }
    },
    {
    question: "Do you enjoy being a primal hunter?",
    types: {
        "Primal (Hunter)": 100,
        "Sadist": 90,
        "Dominant": 80,
        "Master/Mistress": 70,
        "Switch": 60,
        "Vanilla": 20
    }
    },
    {
    question: "Are you interested in consensual master/slave relationships?",
    types: {
        "Master/Mistress": 100,
        "Slave": 90,
        "Dominant": 80,
        "Submissive": 70,
        "Vanilla": 20
    }
    },
    {
    question: "Do you like to experiment with different kinks?",
    types: {
        "Experimentalist": 100,
        "Switch": 90,
        "Dominant": 80,
        "Submissive": 70,
        "Vanilla": 20
    }
    },
    {
    question: "Do you enjoy watching others in intimate situations?",
    types: {
        "Voyeur": 100,
        "Exhibitionist": 90,
        "Non-monogamist": 80,
        "Experimentalist": 70,
        "Vanilla": 20
    }
    },
    {
    question: "Do you like to be watched by others during intimate moments?",
    types: {
        "Exhibitionist": 100,
        "Voyeur": 90,
        "Non-monogamist": 80,
        "Experimentalist": 70,
        "Vanilla": 20
    }
    },
    {
    question: "Are you interested in using restraints?",
    types: {
        "Rigger": 100,
        "Rope bunny": 90,
        "Submissive": 80,
        "Dominant": 70,
        "Switch": 60,
        "Vanilla": 20
    }
    },
    {
    question: "Do you enjoy giving or receiving impact play (e.g., spanking, paddling)?",
    types: {
        "Sadist": 100,
        "Masochist": 90,
        "Submissive": 80,
        "Dominant": 70,
        "Switch": 60,
        "Vanilla": 20
    }
    },
    {
    question: "Do you like to be praised and called endearing names during sex?",
    types: {
        "Boy/Girl": 100,
        "Daddy/Mommy": 90,
        "Submissive": 80,
        "Slave": 70,
        "Vanilla": 20
    }
    },
    {
    question: "Do you enjoy calling your partner endearing names?",
    types: {
        "Daddy/Mommy": 100,
        "Master/Mistress": 90,
        "Dominant": 80,
        "Owner": 70,
        "Vanilla": 20
    }
    },
    {
    question: "Are you interested in being in control of your partner's orgasm?",
    types: {
        "Dominant": 100,
        "Master/Mistress": 90,
        "Owner": 80,
        "Primal (Hunter)": 70,
        "Switch": 60,
        "Vanilla": 20
    }
    },
    {
    question: "Do you enjoy having your partner control your orgasm?",
    types: {
        "Submissive": 100,
        "Slave": 90,
        "Rope bunny": 80,
        "Primal (Prey)": 70,
        "Vanilla": 20
    }
    },
    {
    question: "Do you like to experience role reversals in power dynamics?",
    types: {
        "Switch": 100,
        "Experimentalist": 90,
        "Primal (Hunter)": 80,
        "Primal (Prey)": 70,
        "Vanilla": 20
    }
    },
    {
    question: "Are you comfortable with pain as a part of sexual pleasure?",
    types: {
        "Masochist": 100,
        "Sadist": 90,
        "Submissive": 80,
        "Dominant": 70,
        "Experimentalist": 60,
        "Vanilla": 20
    }
    },
    {
    question: "Do you enjoy being an owner in a pet play scenario?",
    types: {
        "Owner": 100,
        "Dominant": 90,
        "Master/Mistress": 80,
        "Primal (Hunter)": 70,
        "Switch": 60,
        "Vanilla": 20
    }
    },
    {
    question: "Do you like to be a pet in a pet play scenario?",
    types: {
        "Pet": 100,
        "Submissive": 90,
        "Boy/Girl": 80,
        "Primal (Prey)": 70,
        "Rope bunny": 60,
        "Vanilla": 20
    }
    },
    {
    question: "Are you interested in mind control play?",
    types: {
        "Experimentalist": 100,
        "Dominant": 90,
        "Submissive": 80,
        "Switch": 70,
        "Vanilla": 20
    }
    },
    {
    question: "Do you enjoy being restrained and immobilized?",
    types: {
        "Rope bunny": 100,
        "Submissive": 90,
        "Masochist": 80,
        "Slave": 70,
        "Vanilla": 20
    }
    }
    ];
   
   
 
    function startTest(mode) {
        console.log("Starting test in mode:", mode);
        document.querySelector('.mode-selection').classList.add('hidden');
        document.querySelector('#test-section').classList.remove('hidden');
        document.querySelector('#results-section').classList.add('hidden');
        
        if (mode === 'short') {
            totalQuestionsToShow = 30; // Number of questions in short mode
        } else if (mode === 'classic') {
            totalQuestionsToShow = questions.length; // Total number of questions in classic mode
        }
        
        currentQuestionIndex = 0; // Reset the current question index
        answers = []; // Reset answers
        typePoints = { // Reset type points
            "Vanilla": 0, "Dominant": 0, "Submissive": 0, "Master/Mistress": 0,
            "Switch": 0, "Experimentalist": 0, "Pet": 0, "Masochist": 0, "Rigger": 0,
            "Owner": 0, "Exhibitionist": 0, "Daddy/Mommy": 0, "Non-monogamist": 0,
            "Primal (Hunter)": 0, "Slave": 0, "Rope bunny": 0, "Boy/Girl": 0, "Degrader": 0,
            "Sadist": 0, "Degradee": 0, "Primal (Prey)": 0, "Brat tamer": 0, "Ageplayer": 0,
            "Voyeur": 0, "Brat": 0
        };
        showNextQuestion();
    }
    
    function showNextQuestion() {
        if (currentQuestionIndex < totalQuestionsToShow) {
            console.log("Showing question index:", currentQuestionIndex);
            let currentQuestion = questions[currentQuestionIndex];
            document.getElementById("question").innerText = currentQuestion;
            currentQuestionIndex++; // Increment the index for the next question
        } else {
            console.log("All questions answered, calculating result.");
            calculateResult(); // Function to calculate the result when all questions are answered
        }
    }
    
    function recordAnswer(answer) {
        console.log("Recording answer:", answer);
        answers.push(answer);
        console.log("Current Question Index:", currentQuestionIndex);
        console.log("Answers so far:", answers);
        calculateTypePoints(questionTypeMappings[currentQuestionIndex - 1], answer);
        showNextQuestion();
    }
    
    function calculateTypePoints(questionMapping, answer) {
        console.log("Calculating type points for answer:", answer);
        let adjustment = 0;
        switch (answer) {
            case 'Strongly Agree': adjustment = 1; break;
            case 'Agree': adjustment = 0.75; break;
            case 'Neutral': adjustment = 0.5; break;
            case 'Disagree': adjustment = 0.25; break;
            case 'Strongly Disagree': adjustment = 0; break;
        }
    
        for (const [type, points] of Object.entries(questionMapping.types)) {
            typePoints[type] = (typePoints[type] || 0) + (points * adjustment);
        }
        console.log("Updated type points:", typePoints);
    }
    
    function calculateResult() {
        console.log("Calculating final results.");
        let typePercentages = {};
    
        for (let type in typePoints) {
            typePercentages[type] = (typePoints[type] / typeMaxPoints[type]) * 100;
        }
    
        console.log("Final type percentages:", typePercentages);
        showResults(typePercentages);
    }
    
    function getColorForPercentage(percentage) {
        const red = Math.min(255, Math.floor((1 - percentage / 100) * 255));
        const green = Math.min(255, Math.floor((percentage / 100) * 255));
        return `rgb(${red},${green},0)`;
    }
    
    function showResults(typePercentages) {
        console.log("Showing results.");
        document.querySelector('#test-section').classList.add('hidden');
        document.querySelector('#results-section').classList.remove('hidden');
    
        let resultsContainer = document.getElementById('results-container');
        resultsContainer.innerHTML = '';
    
        // Convert to array and sort by percentage
        let sortedResults = Object.entries(typePercentages).sort((a, b) => b[1] - a[1]);
    
        for (const [type, percentage] of sortedResults) {
            let resultItem = document.createElement('div');
            resultItem.innerText = `${type}: ${percentage.toFixed(2)}%`;
            resultItem.style.color = getColorForPercentage(percentage);
            resultsContainer.appendChild(resultItem);
        }
        if (typePercentages["Submissive"] > 50) {
            document.getElementById('video-container').classList.remove('hidden');
        }
    }
    
    function restartTest() {
        console.log("Restarting test.");
        document.querySelector('.mode-selection').classList.remove('hidden');
        document.querySelector('#test-section').classList.add('hidden');
        document.querySelector('#results-section').classList.add('hidden');
    }
    
    function downloadResultsAsPDF() {
        console.log("Downloading results as PDF.");
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const resultsContainer = document.getElementById('results-container');
        
        let y = 10;
        doc.text("BDSM Test Results", 10, y);
        y += 10;
    
        Array.from(resultsContainer.children).forEach((resultItem) => {
            doc.text(resultItem.innerText, 10, y);
            y += 10;
        });
    
        doc.save("BDSM_Test_Results.pdf");
    }
    
    function openMemeDiana() {
        window.location.href = 'Meme Diana/indexx.html';
    }
    
    function toggleSound(videoId) {
        const video = document.getElementById(videoId);
        const button = video.nextElementSibling;
        if (video.muted) {
            video.muted = false;
            button.textContent = '🔊';
        } else {
            video.muted = true;
            button.textContent = '🔇';
        }
    }

    function toggleSound(videoId) {
        const video = document.getElementById(videoId);
        video.muted = !video.muted;
    }
    
    function toggleVideo(videoId) {
        const video = document.getElementById(videoId);
        const button = video.nextElementSibling.nextElementSibling;
    
        if (video.style.display === "none") {
            video.style.display = "block";
            button.textContent = "Hide Video";
        } else {
            video.style.display = "none";
            button.textContent = "Show Video";
        }
    }

    let playlist = [];

    document.addEventListener("DOMContentLoaded", function () {
        loadPlaylist();
    });

    async function uploadSongs() {
        const input = document.getElementById('song-input');
        const files = Array.from(input.files);

        for (const file of files) {
            const base64 = await fileToBase64(file);
            playlist.push({ name: file.name, data: base64 });
            addSongToPlaylist(file.name, base64);
        }

        savePlaylist();
    }

    function addSongToPlaylist(name, data) {
        const listItem = document.createElement('li');
        const songDetails = document.createElement('div');
        songDetails.classList.add('song-details');
        const songTitle = document.createElement('h3');
        songTitle.textContent = name;
        songDetails.appendChild(songTitle);

        const audio = document.createElement('audio');
        audio.controls = true;
        audio.src = data;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => {
            deleteSong(name);
            listItem.remove();
        };

        listItem.appendChild(songDetails);
        listItem.appendChild(audio);
        listItem.appendChild(deleteButton);
        document.getElementById('playlist').appendChild(listItem);
    }

    function savePlaylist() {
        localStorage.setItem('playlist', JSON.stringify(playlist));
    }

    function loadPlaylist() {
        const savedPlaylist = JSON.parse(localStorage.getItem('playlist')) || [];
        playlist = savedPlaylist;

        playlist.forEach(song => {
            addSongToPlaylist(song.name, song.data);
        });
    }

    async function deleteSong(name) {
        playlist = playlist.filter(song => song.name !== name);
        savePlaylist();
    }

    function fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
    