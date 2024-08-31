import javax.swing.text.Position

public class Solution {
    public int findPoisonedDuration(int[] timeSeries, int duration) {
        
        int PoisonTime = 0;
        
        for (int i = 0; i < timeSeries.length - 1; i++) {
            int timeDifference = timeSeries[i + 1] - timeSeries[i];
            PoisonTime = PoisonTime + Math.min(timeDifference, duration);
        }
        
        PoisonTime = PoisonTime + duration;
        return PoisonTime;
        }
    }
