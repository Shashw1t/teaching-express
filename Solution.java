import javax.swing.text.Position;

public class Solution {
    public int findPoisonedDuration(int[] timeSeries, int duration) {
        
        int PoisonTime = 0;
        
        for (int i = 0; i < timeSeries.length - 1; i++) {
            // Calculate the time difference between consecutive attacks
            int timeDifference = timeSeries[i + 1] - timeSeries[i];
            // Add the minimum of the time difference or the full duration
            PoisonTime = PoisonTime + Math.min(timeDifference, duration);
        }
        
        // Add the duration for the 
        PoisonTime = PoisonTime + duration;
        return PoisonTime;
        }
    }