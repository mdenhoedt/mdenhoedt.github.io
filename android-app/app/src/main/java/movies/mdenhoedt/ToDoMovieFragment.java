package movies.mdenhoedt;

import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

public class ToDoMovieFragment extends TitledFragment {
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.fragment_to_do_movie, container, false);
        return rootView;
    }

    @Override
    public CharSequence getTitle() {
        return "TODO";
    }
}
