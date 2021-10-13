package com.rnwithnative.ui;

import android.os.Bundle;

import androidx.annotation.NonNull;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentStatePagerAdapter;

import com.facebook.react.ReactFragment;

public class ViewPagerAdapter extends FragmentStatePagerAdapter {
    private String FAVORITE_SCREEN = "FavoriteScreen";

    private Bundle getLaunchOptions(String message) {
        Bundle initialProperties = new Bundle();
        initialProperties.putString("message", message);
        return initialProperties;
    }

    public ViewPagerAdapter(@NonNull FragmentManager fm, int behavior) {
        super(fm, behavior);
    }

    @NonNull
    @Override
    public Fragment getItem(int position) {
        switch (position) {
            case 1:
                Fragment rnFavoriteFragment = new ReactFragment.Builder()
                        .setComponentName(FAVORITE_SCREEN)
                        .setLaunchOptions(getLaunchOptions("test message"))
                        .build();
//                return new FavoriteFragment();
                return rnFavoriteFragment;
            case 2:
                return new MyPageFragment();
            default:
                return new HomeFragment();
        }
    }

    @Override
    public int getCount() {
        return 3;
    }
}
