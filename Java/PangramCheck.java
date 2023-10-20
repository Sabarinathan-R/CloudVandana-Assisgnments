public class PangramCheck {
    public static boolean isPangram(String sentence) {
        boolean[] alphabet = new boolean[26];
        sentence = sentence.toLowerCase();
        for (char c : sentence.toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                alphabet[c - 'a'] = true;
            }
        }
        for (boolean letterSeen : alphabet) {
            if (!letterSeen) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        String inputSentence = "The quick brown fox jumps over the lazy dog";
        boolean isPangram = isPangram(inputSentence);
        if (isPangram) {
            System.out.println("The input sentence is a pangram.");
        } else {
            System.out.println("The input sentence is not a pangram.");
        }
    }
}
