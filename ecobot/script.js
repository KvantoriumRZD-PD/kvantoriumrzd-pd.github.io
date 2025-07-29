import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class TrashIdentifier {

    public String processTrashIdentification(Map<String, Double> modelResults) {
        
        String identifiedTrash = null;
        Double maxProbability = 0.0;

        for (Map.Entry<String, Double> entry : modelResults.entrySet()) {
            if (entry.getValue() > maxProbability) {
                maxProbability = entry.getValue();
                identifiedTrash = entry.getKey();
            }
        }

       
        if (identifiedTrash != null && maxProbability > 0) {
            return identifiedTrash + ": " + String.format("%.2f", maxProbability); 
        } else {
            return "Не удалось распознать тип мусора.";
        }
    }

    public static void main(String[] args) {
       

       
        Map<String, Double> results = new HashMap<>();
        results.put("Metal", 0.0);
        results.put("Plastic", 0.0);
        results.put("Paper", 0.0);
        results.put("Glass", 0.0);
        results.put("Cardboard", 1.0);
        results.put("Trash", 0.0);
        results.put("Clothes", 0.0);

       
        System.out.println("Результаты распознавания:");
        for (Map.Entry<String, Double> entry : results.entrySet()) {
            if (entry.getValue() > 0) {
                System.out.println(entry.getKey() + ": " + String.format("%.2f", entry.getValue()));
            }
        }

        
        TrashIdentifier identifier = new TrashIdentifier();
        String result = identifier.processTrashIdentification(results);
        System.out.println("\nНаиболее вероятный тип мусора: " + result);
    }
}






